
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'How long does the installation process take?',
    answer: 'A standard residential balcony usually takes 3-6 hours. Larger industrial projects can take 2-4 days depending on scale and complexity.',
    category: 'Installation'
  },
  {
    id: '2',
    question: 'Are the bird spikes harmful to the birds?',
    answer: 'No. Our solutions are humane deterrents. They simply prevent birds from landing; they do not cause injury.',
    category: 'Installation'
  },
  {
    id: '3',
    question: 'What kind of warranty do you provide?',
    answer: 'We provide a 5-year warranty on premium HDPE nets and stainless steel spikes against manufacturing defects and UV degradation.',
    category: 'Warranty'
  },
  {
    id: '4',
    question: 'Is the netting visible from the ground?',
    answer: 'Our signature 0.8mm polymer nets are near-invisible from 15-20 feet away, maintaining your property\'s aesthetic appeal.',
    category: 'Residential'
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-primary font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-2 sm:mb-4">Common Questions</h2>
        <p className="text-slate-500 text-base sm:text-lg">Everything you need to know about our services.</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map(faq => (
          <div
            key={faq.id}
            className={`rounded-xl sm:rounded-2xl border transition-all duration-300 ${openId === faq.id ? 'bg-white border-secondary/30 shadow-xl' : 'bg-white border-gray-100 hover:border-gray-300'}`}
          >
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-5 sm:p-8 text-left focus:outline-none"
            >
              <h3 className="font-bold text-base sm:text-lg text-primary pr-6">{faq.question}</h3>
              <div className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${openId === faq.id ? 'bg-secondary text-white rotate-180' : 'bg-gray-100 text-primary'}`}>
                <span className="material-symbols-outlined text-xl">expand_more</span>
              </div>
            </button>
            {openId === faq.id && (
              <div className="px-5 sm:px-8 pb-6 sm:pb-8 animate-fade-in-up">
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{faq.answer}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {faq.category}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
