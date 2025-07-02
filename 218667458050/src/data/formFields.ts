export interface FormField {
  id: number;
  name: string;
  label: string;
  type: string;
  required: boolean;
  step: number;
}

export const formFields: FormField[] = [
  // 步骤1: 个人信息
  { id: 1, name: 'name', label: '姓名', type: 'text', required: true, step: 1 },
  { id: 2, name: 'idNumber', label: '身份证号', type: 'text', required: true, step: 1 },
  { id: 3, name: 'phone', label: '手机号码', type: 'tel', required: true, step: 1 },
  { id: 4, name: 'email', label: '电子邮箱', type: 'email', required: false, step: 1 },
  { id: 5, name: 'address', label: '通讯地址', type: 'text', required: false, step: 1 },
  
  // 步骤2: 报考志愿
  { id: 6, name: 'university', label: '报考院校', type: 'select', required: true, step: 2 },
  { id: 7, name: 'major', label: '报考专业', type: 'select', required: true, step: 2 },
  { id: 8, name: 'studyType', label: '学习形式', type: 'select', required: true, step: 2 },
  
  // 步骤3: 上传材料
  { id: 9, name: 'idCard', label: '身份证照片', type: 'file', required: true, step: 3 },
  { id: 10, name: 'diploma', label: '学历证书', type: 'file', required: true, step: 3 },
  { id: 11, name: 'additional', label: '补充材料', type: 'file', required: false, step: 3 }
];

export const steps = [
  { id: 1, name: '个人信息' },
  { id: 2, name: '报考志愿' },
  { id: 3, name: '上传材料' }
];