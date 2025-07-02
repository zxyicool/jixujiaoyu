import { processStatus } from '@/data/processStatus';

export function ProcessDiagram() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-xl font-serif font-semibold text-[#0A2463] mb-6">
        报考流程导图
      </h3>
      
      <div className="relative">
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {processStatus.map(step => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                step.current 
                  ? 'bg-[#0A2463] text-white'
                  : step.completed
                  ? 'bg-[#357ABD] text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                <span className="font-sans font-bold">{step.id}</span>
              </div>
              
              <p className={`font-sans text-sm ${
                step.current ? 'font-bold text-[#0A2463]' : 'text-gray-600'
              }`}>
                {step.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
