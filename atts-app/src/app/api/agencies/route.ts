import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');

  try {
    // Start building query
    let query = supabase
      .from('agencies')
      .select(`
        id,
        name,
        location,
        industry,
        trust_scores (
          trust_score,
          reliability_category
        ),
        reviews (
          rating
        )
      `);

    // Apply search filter if provided
    if (search) {
      query = query.ilike('name', `%${search}%`);
    }

    const { data: agencies, error } = await query;

    if (error) {
      console.error("Supabase agencies fetch error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Process data to match frontend requirements
    const formattedAgencies = agencies.map(agency => {
      // Calculate average rating from reviews if they exist
      const reviews = agency.reviews as any[] || [];
      const totalRating = reviews.reduce((sum, r) => sum + Number(r.rating), 0);
      const avgRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : "0.0";
      
      // Extract trust score data (could be an array depending on foreign key setup, assuming single object if 1:1)
      const trustScoreData = Array.isArray(agency.trust_scores) 
        ? agency.trust_scores[0] 
        : agency.trust_scores;

      return {
        id: agency.id,
        name: agency.name,
        location: agency.location,
        industry: agency.industry,
        trust_score: trustScoreData?.trust_score || 0,
        reliability_category: trustScoreData?.reliability_category || 'Unknown',
        rating: Number(avgRating)
      };
    });

    return NextResponse.json(formattedAgencies);

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
