"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, ShieldCheck, MapPin, Briefcase } from "lucide-react";

// Mock data (replace with real API call later)
const mockAgencies = [
  {
    id: "1",
    name: "TechTalent Recruitment",
    location: "San Francisco, CA",
    industry: "Tech & IT",
    trust_score: 92,
    reliability_category: "Excellent",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Healthcare Heroes Staffing",
    location: "New York, NY",
    industry: "Healthcare",
    trust_score: 85,
    reliability_category: "Highly Reliable",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Global Finance Placements",
    location: "London, UK",
    industry: "Finance",
    trust_score: 65,
    reliability_category: "Moderate",
    rating: 3.8,
  },
  {
    id: "4",
    name: "FastHire Temp Agency",
    location: "Austin, TX",
    industry: "General",
    trust_score: 45,
    reliability_category: "Risky",
    rating: 2.1,
  }
];

export default function AgenciesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAgencies = mockAgencies.filter(agency => 
    agency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Agency Explorer</h1>
        <p className="text-lg text-white/60">Discover and compare recruitment agencies based on their verified Trust Scores.</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Search agencies by name..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-cyan text-white placeholder-white/40 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors whitespace-nowrap">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </div>

      {/* Agency Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgencies.map((agency) => (
          <Link href={`/agencies/${agency.id}`} key={agency.id} className="block group">
            <div className="glass-card p-6 h-full border-t-[3px] border-t-cyan relative overflow-hidden">
              
              {/* Category Badge */}
              <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-lg ${
                agency.trust_score >= 90 ? "bg-neon-blue text-black" :
                agency.trust_score >= 75 ? "bg-purple text-white" :
                agency.trust_score >= 60 ? "bg-yellow-500 text-black" :
                "bg-pink text-white"
              }`}>
                {agency.reliability_category}
              </div>

              <h2 className="text-xl font-bold mb-2 group-hover:text-cyan transition-colors line-clamp-1 pr-16">{agency.name}</h2>
              
              <div className="flex flex-col gap-2 mb-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {agency.location}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> {agency.industry}
                </div>
              </div>

              <div className="flex items-end justify-between pt-4 border-t border-white/10 mt-auto">
                <div>
                  <div className="text-xs text-white/50 mb-1">Trust Score</div>
                  <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                    {agency.trust_score} <span className="text-sm font-normal text-white/40">/ 100</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/50 mb-1">Rating</div>
                  <div className="text-xl font-bold text-white flex items-center gap-1 justify-end">
                    {agency.rating} <span className="text-white/40 text-sm">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredAgencies.length === 0 && (
        <div className="text-center py-20 text-white/50">
          <ShieldCheck className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <p className="text-xl">No agencies found matching your search.</p>
        </div>
      )}

    </div>
  );
}
