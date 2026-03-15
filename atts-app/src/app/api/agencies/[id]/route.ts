import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data: agency, error } = await supabase
      .from('agencies')
      .select(`
        id,
        name,
        location,
        industry,
        description,
        agency_metrics (
          placement_success_rate,
          avg_salary,
          response_time,
          complaint_rate
        ),
        trust_scores (
          trust_score,
          reliability_category,
          structured_score,
          sentiment_score,
          ai_insights
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // No rows found
        return NextResponse.json({ error: "Agency not found" }, { status: 404 });
      }
      console.error("Supabase agency details fetch error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Format output
    const metrics = Array.isArray(agency.agency_metrics) ? agency.agency_metrics[0] : agency.agency_metrics;
    const trustScores = Array.isArray(agency.trust_scores) ? agency.trust_scores[0] : agency.trust_scores;

    const formattedAgency = {
      id: agency.id,
      name: agency.name,
      location: agency.location,
      industry: agency.industry,
      description: agency.description,
      metrics: {
        placement_success_rate: metrics?.placement_success_rate || 0,
        avg_salary: metrics?.avg_salary || "N/A",
        response_time: metrics?.response_time || "N/A",
        complaint_rate: metrics?.complaint_rate || 0
      },
      trust_score: trustScores?.trust_score || 0,
      reliability_category: trustScores?.reliability_category || "Unknown",
      structured_score: trustScores?.structured_score || 0,
      sentiment_score: trustScores?.sentiment_score || 0,
      ai_insights: trustScores?.ai_insights || {
        summary: "No AI insights available yet.",
        strengths: [],
        weaknesses: []
      }
    };

    return NextResponse.json(formattedAgency);

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
