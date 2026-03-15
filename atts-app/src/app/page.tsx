import Link from "next/link";
import { ShieldCheck, TrendingUp, Users, BrainCircuit, Search, BarChart3, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan text-sm font-medium mb-8">
          <BrainCircuit className="w-4 h-4" />
          <span>AI-Powered Recruitment Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Find Recruitment Agencies <br/>
          You Can <span className="text-gradient">Actually Trust</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-3xl mb-12">
          The JSO Agency Trust & Transparency System evaluates agencies using real candidate feedback, placement success rates, and Gemini AI sentiment analysis to deliver an actionable Trust Score.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/agencies" className="btn-neon text-lg px-8 py-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            Explore Agencies
          </Link>
          <Link href="#how-it-works" className="px-8 py-4 text-lg font-semibold text-white/80 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-lg bg-white/5 hover:bg-white/10">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="w-full bg-black/30 border-y border-white/5 py-20 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-purple flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Trust Score</h3>
            <p className="text-white/60">
              Our advanced algorithm combines structured metrics with complex sentiment analysis of unstructured reviews.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparent Metrics</h3>
            <p className="text-white/60">
              View accurate placement success rates, salary averages, and historical performance consistency.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink to-orange-500 flex items-center justify-center mb-6">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Explainable Insights</h3>
            <p className="text-white/60">
              Google Gemini AI breaks down the score and generates human-readable insights explaining why an agency is reliable or risky.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How ATTS Evaluates Agencies</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Our rigorous 3-step evaluation process ensures you only see the most authentic and reliable representation of a recruitment agency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-neon-blue via-purple to-pink opacity-30 z-0"></div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-black border-2 border-neon-blue flex items-center justify-center text-2xl font-bold shadow-[0_0_20px_rgba(0,255,255,0.3)] mb-6">1</div>
            <h4 className="text-xl font-bold mb-2">Data Collection</h4>
            <p className="text-white/60">We aggregate candidate reviews, feedback ratings, and placement statistics to form an integrated dataset.</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-black border-2 border-purple flex items-center justify-center text-2xl font-bold shadow-[0_0_20px_rgba(181,0,255,0.3)] mb-6">2</div>
            <h4 className="text-xl font-bold mb-2">Gemini Analysis</h4>
            <p className="text-white/60">The AI performs sentiment analysis to capture nuanced opinions and underlying themes from written texts.</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-black border-2 border-pink flex items-center justify-center text-2xl font-bold shadow-[0_0_20px_rgba(255,0,255,0.3)] mb-6">3</div>
            <h4 className="text-xl font-bold mb-2">Trust Score Generation</h4>
            <p className="text-white/60">The final score (0-100) is calculated combining structured metrics (50%), AI sentiment (30%), and direct ratings (20%).</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 mb-10">
        <div className="glass-card border-cyan/30 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-purple/10 pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to find a reliable partner?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto relative z-10">
            Stop wasting time with deceptive recruitment firms. Verify their Trust Score before you commit your career.
          </p>
          <Link href="/agencies" className="btn-neon text-xl px-10 py-5 inline-block relative z-10">
            Start Exploring Now
          </Link>
        </div>
      </section>

    </div>
  );
}
