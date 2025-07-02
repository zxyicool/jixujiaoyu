import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { UniversityWall } from '@/components/UniversityWall';
import { ProcessGuide } from '@/components/ProcessGuide';
import { Announcements } from '@/components/Announcements';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* 英雄区域 */}
        <section className="bg-[#0A2463] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              成就您的学历梦想
            </h1>
            <p className="text-xl font-sans max-w-2xl mx-auto mb-8">
              高校授权学历提升报考服务平台，为您提供专业、可靠的继续教育服务
            </p>
            <button className="bg-[#357ABD] hover:bg-blue-700 text-white font-sans py-3 px-8 rounded-full transition">
              立即咨询
            </button>
          </div>
        </section>
        
        <UniversityWall />
        <ProcessGuide />
        <Announcements />
      </main>
      
      <Footer />
    </div>
  );
}