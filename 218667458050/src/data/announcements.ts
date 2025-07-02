export interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: '2025年秋季招生简章发布',
    date: '2025-05-20',
    content: '2025年秋季各院校招生简章已更新，请考生及时查阅'
  },
  {
    id: 2,
    title: '新增3所合作院校',
    date: '2025-05-15',
    content: '平台新增3所985高校继续教育项目，欢迎咨询报考'
  },
  {
    id: 3,
    title: '报考系统维护通知',
    date: '2025-05-10',
    content: '5月15日0:00-6:00系统维护，期间无法访问报名功能'
  }
];