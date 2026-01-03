
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">Contact Us</span>
            <h2 className="text-primary font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6 leading-tight">Let's Bird-Proof Your Property</h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">Fill out the form below for a free inspection and quote. Our experts typically respond within 2-4 hours.</p>
          </div>

          <form className="space-y-5 sm:space-y-6 bg-gray-50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/50">Full Name</label>
                <input type="text" placeholder="John Doe" className="h-12 sm:h-14 px-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all text-sm sm:text-base" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/50">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="h-12 sm:h-14 px-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all text-sm sm:text-base" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/50">City / Location</label>
              <input type="text" placeholder="Delhi NCR / Mumbai / Bangalore" className="h-12 sm:h-14 px-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all text-sm sm:text-base" />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/50">Message</label>
              <textarea placeholder="Tell us about your bird problem..." rows={3} className="p-4 rounded-xl border-gray-200 focus:ring-secondary focus:border-secondary transition-all resize-none text-sm sm:text-base"></textarea>
            </div>
            <button className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/95 text-white rounded-xl font-cta font-bold text-base sm:text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
              <span>Send Inquiry</span>
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>

          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 pt-2">
            <div className="flex items-center gap-4">
              <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl">call</span>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase text-gray-400">Call Us</p>
                <p className="font-bold text-primary text-sm sm:text-base">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl">mail</span>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase text-gray-400">Email Us</p>
                <p className="font-bold text-primary text-sm sm:text-base">info@birdbarrier.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[350px] sm:h-[450px] lg:h-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-2xl">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArsCf8EZTsPJ-LgYHRWjbrzlJKWekw2JZtC5yaI386ASI7DunT074vTRnRCHe2acVKH88unDNd-P0L1IsEX3UrCjzJ1lzM3q1Lycfpob05LXulBQZMWuGP_tB2pIcifmU_nthmP6tG-Ke3aMb0cfXCm6B0rhUDsSshjLr1DtQkBso1Rj_sWhZafVxUM1ykHO9PXkqbr6Fzr77JQgtXMV2VlS4VF78z6W5Z2zZJ8hUfxNzYF9kuQOTNZ69HSCEc5OZy8ajQr-r3os13"
            alt="Map showing our service coverage"
            className="absolute inset-0 w-full h-full object-cover grayscale sm:transition-all sm:duration-700 sm:group-hover:grayscale-0 sm:group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 p-5 sm:p-8 glass-panel rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">location_on</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-0.5 sm:mb-1">Service Coverage</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Operating in Delhi NCR, Mumbai, and Bangalore. Visit within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
