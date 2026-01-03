
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Expert advice at no cost to assess your specific requirements.',
    icon: 'support_agent'
  },
  {
    num: '02',
    title: 'Measurement',
    desc: 'Precise site measurements ensuring a perfect custom fit.',
    icon: 'square_foot'
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'Certified technicians install safely with zero mess or hassle.',
    icon: 'construction'
  },
  {
    num: '04',
    title: 'Warranty',
    desc: 'Quality check followed by a comprehensive 5-year guarantee.',
    icon: 'verified_user'
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Our Method</span>
          <h2 className="text-primary font-heading font-black text-3xl md:text-5xl tracking-tight">How We Deliver Excellence</h2>
        </div>
        <p className="text-slate-500 text-lg lg:max-w-xs">A seamless journey from your first call to a bird-free property.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="group relative">
            <div className="mb-8 flex items-center justify-center lg:justify-start">
              <div className="relative z-10 w-14 h-14 rounded-full bg-white border-4 border-background-light shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">{step.icon}</span>
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white">{step.num}</div>
              </div>
            </div>
            <div className="text-center lg:text-left p-6 bg-gray-50 rounded-2xl border border-transparent group-hover:border-secondary/20 group-hover:bg-white transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
