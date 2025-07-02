import { materials } from '@/data/materials';

export function MaterialList() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-xl font-serif font-semibold text-[#0A2463] mb-4">
        资料准备清单
      </h3>
      
      <div className="space-y-3">
        {materials.map(material => (
          <div key={material.id} className="flex justify-between items-center">
            <div className="flex items-center">
              {material.required ? (
                <span className="text-red-500 mr-2">*</span>
              ) : null}
              <p className="font-sans">{material.name}</p>
            </div>
            
            <a 
              href={material.downloadLink}
              className="text-[#357ABD] hover:text-[#0A2463] font-sans text-sm flex items-center"
            >
              <i className="fa-solid fa-download mr-1"></i>
              下载模板
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
