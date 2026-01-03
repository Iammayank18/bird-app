
import React, { useState } from 'react';
import { GalleryProject } from '../types';

const projects: GalleryProject[] = [
  { id: '1', title: 'Skyline Terrace', category: 'Residential', location: 'Mumbai', imageUrl: 'https://picsum.photos/seed/p1/600/800' },
  { id: '2', title: 'Tech Hub Facade', category: 'Commercial', location: 'Delhi', imageUrl: 'https://picsum.photos/seed/p2/600/800' },
  { id: '3', title: 'Industrial Warehouse', category: 'Industrial', location: 'Pune', imageUrl: 'https://picsum.photos/seed/p3/600/800' },
  { id: '4', title: 'AC Duct Enclosure', category: 'Residential', location: 'Gurgaon', imageUrl: 'https://picsum.photos/seed/p4/600/800' },
  { id: '5', title: 'School Courtyard', category: 'Institutional', location: 'Noida', imageUrl: 'https://picsum.photos/seed/p5/600/800' },
  { id: '6', title: 'Hotel Pool Area', category: 'Commercial', location: 'Goa', imageUrl: 'https://picsum.photos/seed/p6/600/800' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-12 gap-6 sm:gap-8">
        <div className="text-left">
          <h2 className="text-primary font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-2 sm:mb-4">Successful Projects</h2>
          <p className="text-slate-500 text-base sm:text-lg">Real results that speak for themselves.</p>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-xl sm:rounded-full font-bold text-[13px] sm:text-sm transition-all whitespace-nowrap ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary hover:bg-gray-100 border border-gray-100 sm:border-none'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-200 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8">
              <span className="text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">{project.category}</span>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{project.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-sm sm:text-base">location_on</span>
                {project.location}
              </p>
            </div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-primary">
              <span className="material-symbols-outlined text-xl sm:text-2xl">zoom_in</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
