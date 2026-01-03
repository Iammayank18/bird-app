
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya M.',
    role: 'Apartment Secretary',
    location: 'Mumbai',
    content: "The installation was incredibly professional. The netting is practically invisible from the street, which was a major concern for our society. Problem finally solved!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    id: '2',
    name: 'Rahul S.',
    role: 'Restaurant Owner',
    location: 'Delhi',
    content: "Hygiene is critical for my business. BirdBarrier helped us solve the pigeon roosting issue in our outdoor seating area completely. Highly recommended.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    id: '3',
    name: 'Anjali K.',
    role: 'Homeowner',
    location: 'Bangalore',
    content: "Fast service and clean work. The balcony is finally usable again. You honestly can't see the net unless you're looking for it. Amazing aesthetic.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=anjali'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-primary font-heading font-black text-3xl md:text-5xl tracking-tight mb-4">What Our Clients Say</h2>
        <p className="text-slate-500 text-lg">Join thousands of happy homeowners and businesses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(t => (
          <div key={t.id} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col gap-6 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-8 right-8 text-primary/10">
              <span className="material-symbols-outlined text-6xl">format_quote</span>
            </div>
            
            <div className="flex gap-1 text-accent">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-lg filled">star</span>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed text-lg flex-grow italic">"{t.content}"</p>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
              <img src={t.avatar} alt={t.name} className="size-12 rounded-full ring-2 ring-secondary/20" />
              <div>
                <h4 className="font-bold text-primary">{t.name}</h4>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{t.role}, {t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
