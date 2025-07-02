import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-[#0A2463] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-graduation-cap text-2xl"></i>
          <Link to="/" className="text-xl font-serif font-bold">学历继续教育平台</Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#357ABD] transition">首页</Link>
          <Link to="/apply" className="hover:text-[#357ABD] transition">报考导航</Link>
          <Link to="/materials" className="hover:text-[#357ABD] transition">资料中心</Link>
          <Link to="/application" className="hover:text-[#357ABD] transition">报名系统</Link>
        </div>
        
        <div className="md:hidden">
          <i className="fa-solid fa-bars text-xl"></i>
        </div>
      </div>
    </nav>
  );
}