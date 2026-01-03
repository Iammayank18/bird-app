
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl">grid_4x4</span>
              <h2 className="text-2xl font-heading font-black tracking-tight">BirdBarrier<span className="text-secondary">India</span></h2>
            </div>
            <p className="text-white/60 leading-relaxed">
              India's leading provider of humane and durable bird control solutions. We protect your architecture without compromising its beauty.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><span className="material-symbols-outlined text-xl">public</span></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><span className="material-symbols-outlined text-xl">phone_in_talk</span></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Services</h3>
            <ul className="flex flex-col gap-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Safety Netting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pigeon Spikes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AC Duct Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industrial Mesh</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Company</h3>
            <ul className="flex flex-col gap-4 text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Contact</h3>
            <div className="flex flex-col gap-4 text-white/70">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">location_on</span>
                Shop No. 42, Bandra West,<br />Mumbai, MH 400050
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">call</span>
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">mail</span>
                info@birdbarrier.in
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2024 BirdBarrier India. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
