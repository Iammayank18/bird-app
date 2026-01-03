
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Pigeon Spikes',
    description: 'Marine-grade stainless steel spikes that deter pigeons from landing without causing harm.',
    icon: 'pest_control'
  },
  {
    id: '2',
    title: 'Bird Safety Nets',
    description: 'High-density UV-resistant HDPE nets providing a near-invisible barrier for open areas.',
    icon: 'grid_on'
  },
  {
    id: '3',
    title: 'Balcony Protection',
    description: 'Custom-fitted aesthetic netting solutions that preserve your view and ventilation.',
    icon: 'deck'
  },
  {
    id: '4',
    title: 'AC Unit Cages',
    description: 'Specialized mesh enclosures to prevent bird nesting in and behind outdoor AC units.',
    icon: 'ac_unit'
  },
  {
    id: '5',
    title: 'Industrial Solutions',
    description: 'Large-scale protection for warehouses, factories, and hangars with 24/7 durability.',
    icon: 'domain'
  },
  {
    id: '6',
    title: 'Solar Panel Mesh',
    description: 'Secure barriers that prevent birds from nesting under panels and damaging wiring.',
    icon: 'solar_power'
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">Our Expertise</span>
        <h2 className="text-primary font-heading font-black text-3xl md:text-5xl tracking-tight mb-4">Professional Bird Control</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Safe, effective, and durable solutions designed for modern infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-secondary/5 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-secondary/5 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
              Learn More
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
