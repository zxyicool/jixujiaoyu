export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: '资格预审',
    description: '验证您的报考资格条件',
    icon: 'fa-solid fa-clipboard-check',
    link: '/apply'
  },
  {
    id: 2,
    title: '选择院校',
    description: '浏览合作院校及专业',
    icon: 'fa-solid fa-school',
    link: '/apply'
  },
  {
    id: 3,
    title: '准备材料',
    description: '下载所需申请材料模板',
    icon: 'fa-solid fa-file-pen',
    link: '/apply'
  },
  {
    id: 4,
    title: '在线报名',
    description: '填写并提交报名表格',
    icon: 'fa-solid fa-pen-to-square',
    link: '/apply'
  },
  {
    id: 5,
    title: '确认缴费',
    description: '完成报名费支付',
    icon: 'fa-solid fa-credit-card',
    link: '/apply'
  }
];