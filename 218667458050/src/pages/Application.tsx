import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ApplicationForm } from '@/components/ApplicationForm';
import { CustomerService } from '@/components/CustomerService';
import { FormProgress } from '@/components/FormProgress';
import { SaveStatus } from '@/components/SaveStatus';

export default function Application() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* 左侧进度导航 */}
              <div className="w-full md:w-64 bg-[#0A2463] text-white p-6">
                <FormProgress currentStep={currentStep} />
              </div>
              
              {/* 主内容区 */}
              <div className="flex-1 p-6 relative">
                <SaveStatus />
                
                {!isSubmitted ? (
                  <ApplicationForm 
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    onSubmit={() => setIsSubmitted(true)}
                  />
                ) : (
                  <CustomerService />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}