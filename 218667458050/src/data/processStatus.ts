export interface ProcessStatus {
  id: number;
  name: string;
  current: boolean;
  completed: boolean;
}

export const processStatus: ProcessStatus[] = [
  {
    id: 1,
    name: '资格预审',
    current: true,
    completed: false
  },
  {
    id: 2,
    name: '材料准备',
    current: false,
    completed: false
  },
  {
    id: 3,
    name: '在线报名',
    current: false,
    completed: false
  },
  {
    id: 4,
    name: '确认缴费',
    current: false,
    completed: false
  }
];
