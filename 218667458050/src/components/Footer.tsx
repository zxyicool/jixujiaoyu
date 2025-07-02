export function Footer() {
  return (
    <footer className="bg-[#0A2463] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-[#357ABD] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-serif text-lg">学历继续教育服务平台</p>
              <p className="text-sm opacity-80">高校授权学历提升报考服务</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#357ABD] transition">
                <i className="fa-brands fa-weixin"></i>
              </a>
              <a href="#" className="hover:text-[#357ABD] transition">
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href="#" className="hover:text-[#357ABD] transition">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm opacity-70">
            <p>© 2025 学历继续教育平台 版权所有</p>
            <p className="mt-1">备案号: 京ICP备XXXXXXXX号</p>
          </div>
        </div>
      </div>
    </footer>
  );
}