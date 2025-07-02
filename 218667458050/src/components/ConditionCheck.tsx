import { useState } from 'react';
import { checkItems } from '@/data/checkItems';

export function ConditionCheck() {
  const [items, setItems] = useState(checkItems);

  const toggleCheck = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? {...item, passed: !item.passed} : item
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-xl font-serif font-semibold text-[#0A2463] mb-4">
        条件自检
      </h3>
      
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-start">
            <button
              onClick={() => toggleCheck(item.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 mt-1 ${
                item.passed 
                  ? 'border-[#357ABD] bg-[#357ABD] text-white'
                  : 'border-gray-300'
              }`}
            >
              {item.passed && <i className="fa-solid fa-check text-xs"></i>}
            </button>
            
            <div>
              <p className="font-sans font-medium">
                {item.name}
                {!item.passed && (
                  <span className="ml-2 text-sm text-red-500">
                    ({item.message})
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
