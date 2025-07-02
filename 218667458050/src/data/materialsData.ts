export interface MaterialFile {
  id: number;
  name: string;
  category: string;
  year: string;
  major: string;
  size: string;
  downloads: number;
  previewImage: string;
  fileUrl: string;
}

export const materialsData: MaterialFile[] = [
  {
    id: 1,
    name: '2025年高等数学真题',
    category: '真题',
    year: '2025',
    major: '理工类',
    size: '2.4MB',
    downloads: 128,
    previewImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=%E9%AB%98%E7%AD%89%E6%95%B0%E5%AD%A6%E8%80%83%E8%AF%95%E9%A2%98%E7%9B%AE%E9%A2%84%E8%A7%88%E5%9B%BE&sign=ddace6eb1f22aa6e3fe8f63eb3583f3d',
    fileUrl: '#'
  },
  {
    id: 2,
    name: '2024年大学英语真题',
    category: '真题',
    year: '2024',
    major: '文科类',
    size: '1.8MB',
    downloads: 215,
    previewImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=%E5%A4%A7%E5%AD%A6%E8%8B%B1%E8%AF%AD%E8%80%83%E8%AF%95%E9%A2%98%E7%9B%AE%E9%A2%84%E8%A7%88%E5%9B%BE&sign=6812d116db01702883a5a52b5ce8a653',
    fileUrl: '#'
  },
  {
    id: 3,
    name: '2025年考纲解析',
    category: '考纲',
    year: '2025',
    major: '通用',
    size: '3.2MB',
    downloads: 178,
    previewImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=%E8%80%83%E8%AF%95%E5%A4%A7%E7%BA%B2%E8%A7%A3%E6%9E%90%E6%96%87%E6%A1%A3%E9%A2%84%E8%A7%88&sign=88be19917413e3ccf75c53f8cd83e8e3',
    fileUrl: '#'
  }
];