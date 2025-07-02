export interface Material {
  id: number;
  name: string;
  required: boolean;
  downloadLink: string;
}

export const materials: Material[] = [
  {
    id: 1,
    name: '报名申请表',
    required: true,
    downloadLink: '#'
  },
  {
    id: 2,
    name: '身份证复印件模板',
    required: true,
    downloadLink: '#'
  },
  {
    id: 3,
    name: '学历证书复印件模板',
    required: true,
    downloadLink: '#'
  },
  {
    id: 4,
    name: '工作证明模板',
    required: false,
    downloadLink: '#'
  }
];
