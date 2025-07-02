# 学历继续教育平台

这是一个基于React + TypeScript + Vite构建的学历继续教育平台前端项目。

## 功能特性

- 院校展示墙
- 报考流程指引
- 在线报名系统
- 资料下载中心
- 最新公告展示

## 部署指南

### 1. 上传代码到GitHub

1. 在[GitHub官网](https://github.com)注册账号(如已有账号可跳过)
2. 点击右上角"+"按钮，选择"New repository"
3. 填写仓库名称(如"education-platform")，选择公开或私有
4. 点击"Create repository"完成创建

本地操作：
```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "initial commit"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送代码
git push -u origin main
```

### 2. 使用Vercel部署

1. 访问[Vercel官网](https://vercel.com)并注册账号(推荐使用GitHub账号登录)
2. 点击"Add New Project"按钮
3. 从GitHub导入刚创建的仓库
4. 配置项目设置：
   - 框架预设选择"Vite"
   - 根目录保持默认
   - 构建命令: `npm run build`
   - 输出目录: `dist/static`
5. 点击"Deploy"开始部署
6. 等待部署完成，Vercel会提供一个可访问的URL(如https://education-platform.vercel.app)

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router