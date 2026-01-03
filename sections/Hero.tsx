
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk4qjrhIUnGsx5JKH1NpTuX52ZJNyuJiQJCVXFAGCvi1q6lyFuqy9RZSv7oCoOlHZQTkWJglW8ihXY1bcAJZMjfOzqGIw8dRhKfBC1EMbAe2WgoNYNsm1VK5TUJU84kEKRugg7i3qoEAhK2jVlxPAS3iR-_T2al8az9xbWZ0KdXQ4N0K3SiHna8t5XpJl2Azn355qT2tOST0yWBQXuiulotujm77dgw46GugVB7UOfF2XCNqex5T73EEnlDOofNfc5nhAFqrhIFaLs"
          alt="Modern balcony with bird netting"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent lg:from-primary/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-xl animate-fade-in-up">
          <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-white/20">
            {/* Trust Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 sm:mb-8">
              <span className="material-symbols-outlined text-secondary text-base sm:text-lg filled">verified</span>
              <span className="text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-none">#1 Bird Control in Delhi NCR</span>
            </div>

            <h1 className="text-primary font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Professional Bird Control Solutions
            </h1>

            <p className="text-slate-700 font-display text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 font-medium">
              Humane, durable, and weather-proof bird net and spike installations for modern homes and corporate spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a href="#contact" className="flex-1 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-cta font-bold text-base sm:text-lg transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0">
                <span>Get Free Quote</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-cta font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-gray-200/50 flex flex-wrap items-center gap-4 sm:gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="material-symbols-outlined text-accent filled text-[16px] sm:text-[20px]">star</span>
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-tighter">4.9/5 Client Rating</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-lg sm:text-xl">security</span>
                  <span className="font-bold text-sm sm:text-base">5 Year</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-tighter">Installation Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-white/70 animate-bounce cursor-pointer">
        <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-[0.3em]">Explore</span>
        <span className="material-symbols-outlined text-xl sm:text-2xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
