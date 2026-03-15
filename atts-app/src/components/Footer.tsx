export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-white/5 bg-black/50 glass-card rounded-none mb-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-gradient">ATTS Intelligence</span>
          </h3>
          <p className="text-white/60 text-sm max-w-sm leading-relaxed">
            The JSO Agency Trust & Transparency System leverages cutting-edge AI to evaluate recruitment agencies, giving job seekers reliable and explainable insights.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="/agencies" className="hover:text-cyan transition-colors">Agency Explorer</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors">Trust Score Formula</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors">Submit Review</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-pink transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-pink transition-colors">Data Ethics</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} JSO Agency Trust & Transparency System. All rights reserved.
      </div>
    </footer>
  );
}
