import { processSteps } from '@/data/processSteps';
import { Link } from 'react-router-dom';

export function ProcessGuide() {
  return (
    <section className="py-12 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-[#0A2463] mb-8">
          报考流程指引
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#357ABD] transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative z-10">
                <Link 
                  to={step.link}
                  className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0A2463] flex items-center justify-center mb-4">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#0A2463] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-sans text-gray-600 text-center">
                    {step.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}