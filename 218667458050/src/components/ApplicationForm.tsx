import { useState, useEffect } from 'react';
import { formFields } from '@/data/formFields';
import { majors } from '@/data/majors';
import { toast } from 'sonner';

export function ApplicationForm({
  currentStep,
  setCurrentStep,
  onSubmit
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onSubmit: () => void;
}) {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('applicationForm');
    return saved ? JSON.parse(saved) : {};
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 自动保存表单数据
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('applicationForm', JSON.stringify(formData));
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // 清除该字段的错误
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateStep = (step: number) => {
    const stepFields = formFields.filter(field => field.step === step);
    const newErrors: Record<string, string> = {};
    
    stepFields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label}不能为空`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      onSubmit();
      toast.success('报名表已提交成功！');
      localStorage.removeItem('applicationForm');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-[#0A2463] mb-6">
        {currentStep === 1 && '个人信息'}
        {currentStep === 2 && '报考志愿'}
        {currentStep === 3 && '上传材料'}
      </h2>
      
      {/* 步骤1: 个人信息 */}
      {currentStep === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields
            .filter(field => field.step === 1)
            .map(field => (
              <div key={field.name} className="space-y-1">
                <label className="block font-sans text-sm text-gray-600">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent ${
                    errors[field.name] ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}
        </div>
      )}
      
      {/* 步骤2: 报考志愿 */}
      {currentStep === 2 && (
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-1">
            <label className="block font-sans text-sm text-gray-600">
              报考院校
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="university"
              value={formData.university || ''}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent ${
                errors.university ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">请选择院校</option>
              <option value="清华大学继续教育学院">清华大学继续教育学院</option>
              <option value="北京大学网络教育学院">北京大学网络教育学院</option>
              <option value="复旦大学继续教育学院">复旦大学继续教育学院</option>
            </select>
            {errors.university && (
              <p className="text-red-500 text-sm">{errors.university}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="block font-sans text-sm text-gray-600">
              报考专业
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="major"
              value={formData.major || ''}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent ${
                errors.major ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">请选择专业</option>
              {majors.map(major => (
                <option key={major} value={major}>{major}</option>
              ))}
            </select>
            {errors.major && (
              <p className="text-red-500 text-sm">{errors.major}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="block font-sans text-sm text-gray-600">
              学习形式
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="studyType"
              value={formData.studyType || ''}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent ${
                errors.studyType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">请选择学习形式</option>
              <option value="网络教育">网络教育</option>
              <option value="业余学习">业余学习</option>
              <option value="函授学习">函授学习</option>
            </select>
            {errors.studyType && (
              <p className="text-red-500 text-sm">{errors.studyType}</p>
            )}
          </div>
        </div>
      )}
      
      {/* 步骤3: 上传材料 */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <label className="block font-sans text-sm text-gray-600">
              身份证正反面照片
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="file"
              name="idCard"
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent ${
                errors.idCard ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.idCard && (
              <p className="text-red-500 text-sm">{errors.idCard}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="block font-sans text-sm text-gray-600">
              最高学历证书
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="file"
              name="diploma"
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent ${
                errors.diploma ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.diploma && (
              <p className="text-red-500 text-sm">{errors.diploma}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="block font-sans text-sm text-gray-600">
              其他补充材料（可选）
            </label>
            <input
              type="file"
              name="additional"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2463] focus:border-transparent"
            />
          </div>
        </div>
      )}
      
      {/* 导航按钮 */}
      <div className="flex justify-between pt-6">
        {currentStep > 1 && (
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 text-[#0A2463] font-sans py-3 px-6 rounded-full transition"
          >
            上一步
          </button>
        )}
        
        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            className="ml-auto bg-[#0A2463] hover:bg-[#357ABD] text-white font-sans py-3 px-6 rounded-full transition"
          >
            下一步
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="ml-auto bg-[#0A2463] hover:bg-[#357ABD] text-white font-sans py-3 px-6 rounded-full transition"
          >
            提交报名表
          </button>
        )}
      </div>
    </div>
  );
}