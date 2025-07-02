import { useState } from 'react';
import { universities } from '@/data/universities';

export function UniversityWall() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-[#0A2463] to-[#357ABD]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
          合作院校展示
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {universities.map(university => (
            <div 
              key={university.id}
              className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredId(university.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col items-center">
                <img 
                  src={university.logo} 
                  alt={university.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-serif font-semibold text-white text-center">
                  {university.name}
                </h3>
                
                {hoveredId === university.id && (
                  <div className="absolute inset-0 bg-[#0A2463]/90 rounded-xl p-6 flex items-center justify-center">
                    <p className="text-white text-sm font-sans">
                      {university.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}