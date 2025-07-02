import { useState, useEffect } from 'react';

export function CustomerService() {
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48小时倒计时
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className="fa-solid fa-check text-4xl text-green-500"></i>
      </div>
      
      <h2 className="text-2xl font-serif font-bold text-[#0A2463] mb-4">
        报名表已成功提交！
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        您的专属客服将在48小时内与您联系，请保持电话畅通
      </p>
      
      <div className="bg-[#F5F5F5] rounded-xl p-6 max-w-md mx-auto mb-8">
        <div className="grid grid-cols-2 gap-4 text-left mb-4">
          <div>
            <p className="text-sm text-gray-500">工单编号</p>
            <p className="font-sans font-medium">CS-{new Date().getTime()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">提交时间</p>
            <p className="font-sans font-medium">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-2">预计响应时间</p>
          <div className="text-2xl font-mono font-bold text-[#0A2463]">
            {hours.toString().padStart(2, '0')}:
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      
      <button className="bg-[#0A2463] hover:bg-[#357ABD] text-white font-sans py-3 px-8 rounded-full transition">
        联系在线客服
      </button>
    </div>
  );
}