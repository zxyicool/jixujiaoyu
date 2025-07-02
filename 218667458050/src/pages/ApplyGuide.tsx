import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConditionCheck } from '@/components/ConditionCheck';
import { MaterialList } from '@/components/MaterialList';
import { ProcessDiagram } from '@/components/ProcessDiagram';

export default function ApplyGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#0A2463] mb-8 text-center">
              学历提升报考导航
            </h2>
            
            <ProcessDiagram />
            <ConditionCheck />
            <MaterialList />
            
            <div className="text-center mt-8">
              <button className="bg-[#0A2463] hover:bg-[#357ABD] text-white font-sans py-3 px-8 rounded-full transition">
                下一步：在线报名
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
