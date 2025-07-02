import { useState, useEffect } from 'react';

export function SaveStatus() {
  const [isSaved, setIsSaved] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // 模拟自动保存状态变化
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSaved(prev => {
        if (!prev) {
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 2000);
        }
        return true;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 right-4 flex items-center">
      {showMessage && (
        <span className="text-sm text-green-600 mr-2">已自动保存</span>
      )}
      <div className={`w-3 h-3 rounded-full ${
        isSaved ? 'bg-green-500' : 'bg-yellow-500'
      }`}></div>
    </div>
  );
}