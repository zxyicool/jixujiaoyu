export interface University {
  id: number;
  name: string;
  logo: string;
  description: string;
}

export const universities: University[] = [
  {
    id: 1,
    name: '清华大学继续教育学院',
    logo: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E6%A0%A1%E5%BE%BD&sign=24003a1220e29095159d6eaa20d66ea5',
    description: '中国顶尖高等学府，提供工商管理、计算机科学等专业继续教育项目'
  },
  {
    id: 2,
    name: '北京大学网络教育学院',
    logo: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%A0%A1%E5%BE%BD&sign=480cef8c399b2ca5179458d9db800f16',
    description: '百年名校，开设法学、经济学、教育学等网络教育本科专业'
  },
  {
    id: 3,
    name: '复旦大学继续教育学院',
    logo: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E6%A0%A1%E5%BE%BD&sign=97fe69e95b39945708d568f91ebe6fe6',
    description: '上海地区知名高校，提供金融学、行政管理等热门专业继续教育'
  }
];