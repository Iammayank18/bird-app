
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">Contact Us</span>
            <h2 className="text-primary font-heading font-black text-3xl md:text-5xl tracking-tight mb-6">Let's Bird-Proof Your Property</h2>
            <p className="text-slate-500 text-lg leading-relaxed">Fill out the form below for a free inspection and quote. Our experts typically respond within 2-4 hours.</p>
          </div>

          <form className="space-y-6 bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Full Name</label>
                <input type="text" placeholder="John Doe" className="h-14 px-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="h-14 px-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/50">City / Location</label>
              <input type="text" placeholder="Delhi NCR / Mumbai / Bangalore" className="h-14 px-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/50">Message</label>
              <textarea placeholder="Tell us about your bird problem..." rows={4} className="p-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all resize-none"></textarea>
            </div>
            <button className="w-full h-14 bg-primary hover:bg-primary/95 text-white rounded-xl font-cta font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
              <span>Send Inquiry</span>
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>

          <div className="flex flex-wrap gap-10 pt-4">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Call Us</p>
                <p className="font-bold text-primary">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Email Us</p>
                <p className="font-bold text-primary">info@birdbarrier.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArsCf8EZTsPJ-LgYHRWjbrzlJKWekw2JZtC5yaI386ASI7DunT074vTRnRCHe2acVKH88unDNd-P0L1IsEX3UrCjzJ1lzM3q1Lycfpob05LXulBQZMWuGP_tB2pIcifmU_nthmP6tG-Ke3aMb0cfXCm6B0rhUDsSshjLr1DtQkBso1Rj_sWhZafVxUM1ykHO9PXkqbr6Fzr77JQgtXMV2VlS4VF78z6W5Z2zZJ8hUfxNzYF9kuQOTNZ69HSCEc5OZy8ajQr-r3os13" 
            alt="Map showing our service coverage" 
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
          
          <div className="absolute bottom-10 left-10 right-10 p-8 glass-panel rounded-3xl shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Service Coverage</h3>
                <p className="text-slate-600">Operating in Delhi NCR, Mumbai, and Bangalore. Our technicians are ready to visit you within 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-primary/30 rounded-full animate-ping"></div>
              <div className="relative w-8 h-8 bg-primary border-4 border-white rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
