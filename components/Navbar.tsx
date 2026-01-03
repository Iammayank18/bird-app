
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`size-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isScrolled ? 'bg-secondary/10 text-secondary' : 'bg-white/20 text-white shadow-lg'}`}>
              <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">grid_4x4</span>
            </div>
            <h2 className={`text-xl font-heading font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white text-shadow'}`}>
              BirdBarrier<span className="text-secondary">India</span>
            </h2>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-cta font-medium text-sm transition-colors hover:text-secondary ${isScrolled ? 'text-primary/80' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className={`hidden sm:flex items-center justify-center gap-2 h-11 px-6 rounded-lg font-cta font-semibold text-sm transition-all shadow-lg active:scale-95 ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-gray-100'}`}>
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Now</span>
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full p-4 border-t border-gray-100 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary font-cta font-medium p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 h-12 bg-primary text-white rounded-lg font-cta font-bold">
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
