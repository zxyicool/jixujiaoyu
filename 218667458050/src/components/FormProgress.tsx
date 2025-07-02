import { steps } from '@/data/formFields';

export function FormProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-serif font-semibold mb-6">报名进度</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              currentStep > step.id 
                ? 'bg-[#357ABD] text-white'
                : currentStep === step.id
                ? 'bg-white text-[#0A2463]'
                : 'bg-white/20 text-white'
            }`}>
              {currentStep > step.id ? (
                <i className="fa-solid fa-check text-xs"></i>
              ) : (
                <span className="font-sans font-bold">{step.id}</span>
              )}
            </div>
            
            <div>
              <p className={`font-sans ${
                currentStep >= step.id ? 'font-bold' : 'opacity-70'
              }`}>
                {step.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}