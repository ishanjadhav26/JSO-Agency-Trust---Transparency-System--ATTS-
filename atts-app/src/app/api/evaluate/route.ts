import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { gemini } from '@/lib/gemini';

export async function POST(req: Request) {
  try {
    const { agencyName, metrics, reviews } = await req.json();

    if (!agencyName || !metrics || !reviews) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Step 1: Calculate Structured Score (Max 100)
    // Formula based on user requirements:
    // 0.4 * success_rate + 0.3 * (rating/5*100) + 0.2 * consistency (mocked as 85) - 0.1 * complaint_rate
    const ratingScore = (metrics.rating / 5) * 100;
    const consistencyScore = 85; 
    const structuredScoreTemp = 
      (0.4 * metrics.placement_success_rate) + 
      (0.3 * ratingScore) + 
      (0.2 * consistencyScore) - 
      (0.1 * metrics.complaint_rate);
    
    // Normalize structured score to 0-100
    const structuredScore = Math.min(Math.max(structuredScoreTemp, 0), 100);

    // Step 2: Use Gemini for Sentiment Analysis and Theme Extraction
    const prompt = `
      You are an expert AI evaluator for recruitment agencies.
      Analyze the following candidate reviews for the agency "${agencyName}".
      
      Reviews:
      ${reviews.map((r: any) => `- ${r.text} (Rating: ${r.rating}/5)`).join('\n')}
      
      Return ONLY a valid JSON object matching this schema, without any markdown formatting or code blocks:
      {
        "sentiment_score": number (0-100),
        "summary": string (a short evaluative summary),
        "strengths": string[] (array of top 3 strengths),
        "weaknesses": string[] (array of top 3 weaknesses or areas for improvement)
      }
    `;

    const response = await gemini.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const aiText = response.text || "{}";
    const cleanedText = aiText.replace(/```json|```/g, '').trim();
    const aiAnalysis = JSON.parse(cleanedText);

    // Step 3: Final Trust Score Calculation
    // 0.5 * structured + 0.3 * sentiment + 0.2 * user rating
    const finalScore = Math.round(
      (0.5 * structuredScore) + 
      (0.3 * aiAnalysis.sentiment_score) + 
      (0.2 * ratingScore)
    );

    // Determine category
    let category = "Risky";
    if (finalScore >= 90) category = "Excellent";
    else if (finalScore >= 75) category = "Highly Reliable";
    else if (finalScore >= 60) category = "Moderate";

    return NextResponse.json({
      trust_score: finalScore,
      reliability_category: category,
      structured_score: Math.round(structuredScore),
      sentiment_score: aiAnalysis.sentiment_score,
      ai_insights: {
        summary: aiAnalysis.summary,
        strengths: aiAnalysis.strengths,
        weaknesses: aiAnalysis.weaknesses
      }
    });

  } catch (error) {
    console.error("AI Evaluation Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
