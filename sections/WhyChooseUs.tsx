
import React from 'react';

const USPs = [
  { title: 'Certified Experts', desc: 'Professionally trained team with strict safety compliance.', icon: 'verified' },
  { title: '10+ Years Exp.', desc: 'A decade of protecting premium Indian properties.', icon: 'shield' },
  { title: '5000+ Clients', desc: 'Trusted by top residential societies and corporates.', icon: 'sentiment_satisfied' },
  { title: '24/7 Support', desc: 'Dedicated lines for quotes and emergency repairs.', icon: 'support_agent' }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Trusted Excellence</span>
        <h2 className="text-primary font-heading font-black text-3xl md:text-5xl tracking-tight mb-4 max-w-2xl">Why India Chooses BirdBarrier?</h2>
        <p className="text-slate-500 text-lg max-w-xl">We don't just install nets; we provide peace of mind with quality that lasts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {USPs.map((usp, idx) => (
          <div key={idx} className="group p-8 bg-white rounded-3xl shadow-sm border border-transparent hover:border-primary/10 hover:shadow-2xl transition-all duration-300 flex flex-col items-start gap-4">
            <div className="size-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl filled">{usp.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-primary">{usp.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{usp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
