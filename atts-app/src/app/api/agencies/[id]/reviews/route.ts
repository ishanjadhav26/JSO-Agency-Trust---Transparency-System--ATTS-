import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data: reviews, error } = await supabase
      .from('reviews')
      .select('id, reviewer_name, rating, review_text, created_at')
      .eq('agency_id', id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase agency reviews fetch error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Format output
    const formattedReviews = reviews.map(review => ({
      id: review.id,
      name: review.reviewer_name,
      rating: Number(review.rating),
      text: review.review_text,
      date: review.created_at
    }));

    return NextResponse.json(formattedReviews);

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
