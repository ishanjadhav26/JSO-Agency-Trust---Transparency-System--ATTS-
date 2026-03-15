"use client";

import { useState } from "react";
import { ShieldCheck, Plus, RefreshCw, BarChart } from "lucide-react";

export default function AdminDashboard() {
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = async () => {
    setIsEvaluating(true);
    // In a real app, you'd call /api/evaluate here
    await new Promise((res) => setTimeout(res, 2000));
    setIsEvaluating(false);
    alert("AI Evaluation completed successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-white/60">Manage agencies, trigger AI evaluations, and view platform metrics.</p>
        </div>
        <button className="btn-neon flex items-center gap-2 w-fit">
          <Plus className="w-5 h-5" /> Add New Agency
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-card p-6 border-l-4 border-l-cyan">
          <div className="text-white/60 text-sm mb-2 font-medium uppercase tracking-wider">Total Agencies</div>
          <div className="text-4xl font-bold">124</div>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-purple">
          <div className="text-white/60 text-sm mb-2 font-medium uppercase tracking-wider">Avg Trust Score</div>
          <div className="text-4xl font-bold">76.4</div>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-pink">
          <div className="text-white/60 text-sm mb-2 font-medium uppercase tracking-wider">Pending Reviews</div>
          <div className="text-4xl font-bold">89</div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2"><BarChart className="w-5 h-5 text-cyan"/> Manage Agencies</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-sm uppercase tracking-wider text-white/60">
                <th className="p-4 font-medium">Agency Name</th>
                <th className="p-4 font-medium">Trust Score</th>
                <th className="p-4 font-medium">Last Evaluated</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold">TechTalent Recruitment</td>
                <td className="p-4"><span className="bg-neon-blue text-black px-2 py-1 rounded font-bold text-xs">92 - Excellent</span></td>
                <td className="p-4 text-white/50">2 hours ago</td>
                <td className="p-4 text-right">
                  <button 
                    onClick={handleEvaluate}
                    disabled={isEvaluating}
                    className="flex items-center gap-2 text-cyan hover:text-white transition-colors ml-auto bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan"
                  >
                    <RefreshCw className={`w-4 h-4 ${isEvaluating ? 'animate-spin' : ''}`} /> 
                    {isEvaluating ? 'Evaluating...' : 'Recalculate AI Score'}
                  </button>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold">FastHire Temp Agency</td>
                <td className="p-4"><span className="bg-pink text-white px-2 py-1 rounded font-bold text-xs">45 - Risky</span></td>
                <td className="p-4 text-white/50">1 day ago</td>
                <td className="p-4 text-right">
                  <button className="flex items-center gap-2 text-cyan hover:text-white transition-colors ml-auto bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan">
                    <RefreshCw className="w-4 h-4" /> Recalculate AI Score
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
