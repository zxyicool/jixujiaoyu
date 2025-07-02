export interface CheckItem {
  id: number;
  name: string;
  passed: boolean;
  message: string;
}

export const checkItems: CheckItem[] = [
  {
    id: 1,
    name: '年龄要求',
    passed: false,
    message: '需年满18周岁'
  },
  {
    id: 2,
    name: '学历要求',
    passed: false,
    message: '需具有高中或同等学历'
  },
  {
    id: 3,
    name: '身份证明',
    passed: false,
    message: '需准备有效身份证件'
  },
  {
    id: 4,
    name: '学历证明',
    passed: false,
    message: '需准备最高学历证书'
  }
];
