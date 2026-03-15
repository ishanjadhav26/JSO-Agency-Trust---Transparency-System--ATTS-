import { ShieldCheck, MapPin, Briefcase, Star, Clock, AlertTriangle, ChevronLeft, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrustChart from "@/components/TrustChart";

// Mock data
const mockAgency = {
  id: "1",
  name: "TechTalent Recruitment",
  location: "San Francisco, CA",
  industry: "Tech & IT",
  description: "Specializing in placing top-tier software engineers and product managers across startups and enterprise tech companies.",
  trust_score: 92,
  reliability_category: "Excellent",
  structured_score: 95,
  sentiment_score: 89,
  rating: 4.8,
  metrics: {
    placement_success_rate: 88.5,
    avg_salary: "$145,000",
    response_time: "1-2 days",
    complaint_rate: 1.2
  },
  ai_insights: {
    summary: "Strong performance with highly positive candidate feedback.",
    strengths: [
      "Consistent high-salary placements",
      "Very low candidate complaint rate",
      "Excellent communication and response times"
    ],
    weaknesses: [
      "Process can sometimes be slower for junior positions"
    ]
  },
  recent_reviews: [
    { id: 1, name: "Alex J.", rating: 5, text: "They found me a senior role within 2 weeks. Very transparent process." },
    { id: 2, name: "Sarah M.", rating: 4, text: "Good experience overall. Recruiter was knowledgeable about the tech stack." }
  ]
};

export default async function AgencyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Mock data
  const { id } = await params;
  
  if (id !== "1") {
    // For mock purposes, only ID "1" works perfectly. In real app, we fetch from DB.
  }
  
  const agency = mockAgency;

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Back button */}
      <Link href="/agencies" className="inline-flex items-center gap-2 text-white/50 hover:text-cyan transition-colors mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Explorer
      </Link>

      {/* Header & Main Score */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Basic Info */}
        <div className="lg:col-span-2 glass-card p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{agency.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-pink" /> {agency.location}
                </div>
                <div className="flex items-center gap-2 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                  <Briefcase className="w-4 h-4 text-purple" /> {agency.industry}
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            {agency.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/50 mb-1">Placement Rate</div>
              <div className="text-xl font-bold text-white">{agency.metrics.placement_success_rate}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/50 mb-1">Avg Salary</div>
              <div className="text-xl font-bold text-white">{agency.metrics.avg_salary}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/50 mb-1 flex items-center gap-1"><Clock className="w-3 h-3"/> Response</div>
              <div className="text-xl font-bold text-white">{agency.metrics.response_time}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/50 mb-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-pink"/> Complaints</div>
              <div className="text-xl font-bold text-white">{agency.metrics.complaint_rate}%</div>
            </div>
          </div>
          
          <TrustChart />
        </div>

        {/* Big Trust Score Widget */}
        <div className="glass-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-black/20 to-black/60">
          {/* Animated glow */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-blue/20 rounded-full blur-[50px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <h3 className="text-white/60 font-semibold mb-6 uppercase tracking-wider text-sm relative z-10">Overall Trust Score</h3>
          
          <div className="relative w-40 h-40 flex items-center justify-center mb-6 z-10">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
              <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="440" strokeDashoffset={440 - (440 * agency.trust_score) / 100} className="text-cyan transition-all duration-1000 ease-out" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-white">{agency.trust_score}</span>
              <span className="text-sm text-white/40 mt-1">out of 100</span>
            </div>
          </div>
          
          <div className="bg-neon-blue/20 text-cyan border border-neon-blue/30 px-6 py-2 rounded-full font-bold relative z-10 w-full">
            {agency.reliability_category}
          </div>
        </div>
      </div>

      {/* AI Evaluation Panel */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <BrainCircuit className="w-6 h-6 text-pink" /> AI Evaluation Insights
        </h2>
        <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-purple to-pink"></div>
          
          {/* Score Breakdown */}
          <div className="md:border-r border-white/10 md:pr-8">
            <h4 className="text-lg font-semibold mb-4 text-white/80">Score Breakdown</h4>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Structured Metrics</span>
                <span className="font-bold">{agency.structured_score}/100</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-purple h-2 rounded-full" style={{ width: `${agency.structured_score}%` }}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Sentiment Score (Gemini)</span>
                <span className="font-bold">{agency.sentiment_score}/100</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-pink h-2 rounded-full" style={{ width: `${agency.sentiment_score}%` }}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>User Ratings</span>
                <span className="font-bold">{(agency.rating / 5) * 100}/100</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-cyan h-2 rounded-full" style={{ width: `${(agency.rating / 5) * 100}%` }}></div>
              </div>
            </div>
          </div>

          {/* AI Insights TEXT */}
          <div className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-cyan mb-2">Gemini Analysis Summary</h4>
              <p className="text-white/80">{agency.ai_insights.summary}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Key Strengths</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {agency.ai_insights.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Risk Areas</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {agency.ai_insights.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-pink mt-0.5">•</span> {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <Star className="w-6 h-6 text-yellow-400" /> Recent Candidate Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agency.recent_reviews.map((review) => (
            <div key={review.id} className="glass-card p-6 border-l-4 border-l-yellow-400">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold">{review.name}</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-white/20"}`} />
                  ))}
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
