import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { materialsData } from '@/data/materialsData';

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  
  const categories = ['全部', ...new Set(materialsData.map(item => item.category))];
  const majors = ['全部', ...new Set(materialsData.map(item => item.major))];
  
  const filteredMaterials = materialsData.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-[#0A2463] mb-8 text-center">
            资料中心
          </h2>
          
          {/* 搜索和筛选区域 */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="搜索资料..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-2">
                <select
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* 书架式文件展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map(material => (
              <div key={material.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={material.previewImage} 
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-serif font-semibold text-[#0A2463] mb-2">
                    {material.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm font-sans text-gray-600 mb-3">
                    <div>分类: {material.category}</div>
                    <div>年份: {material.year}</div>
                    <div>专业: {material.major}</div>
                    <div>大小: {material.size}</div>
                    <div>下载: {material.downloads}次</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-[#357ABD] hover:text-[#0A2463] font-sans">
                      <i className="fa-solid fa-eye mr-1"></i>预览
                    </button>
                    <a 
                      href={material.fileUrl}
                      className="bg-[#0A2463] hover:bg-[#357ABD] text-white py-2 px-4 rounded-full text-sm transition"
                    >
                      <i className="fa-solid fa-download mr-1"></i>下载
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}