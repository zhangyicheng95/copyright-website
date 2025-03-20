import { defineConfig } from '@umijs/max';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 设置为相对路径
  history: {
    type: 'hash',
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  proxy: {
    '/apiv1': {
      target: 'http://api.wentouzhilv.com/', // 后端服务器地址
      changeOrigin: true,
      pathRewrite: { '^/apiv1': '' },
    },
  },
  layout: {
    layout: 'top',
    title: '数字化大屏',
    logo: '',
  },
  routes: [
    {
      path: '/',
      component: './index.tsx',
      routes: [
        // { path: '/login', component: './Login' },
        { path: '/home', component: './Home/index.tsx' },
        { path: '/news', component: './News/index.tsx' },
        { path: '/about', component: './About/index.tsx' },
        { path: '/activity', component: './Activity/index.tsx' },
        { path: '/guide', component: './Guide/index.tsx' },
        { path: '/service', component: './Service/index.tsx' },
        { path: '/copyright', component: './Copyright/index.tsx' },
      ],
      layout: false,
    },
    {
      path: '/',
      redirect: '/home',
    }
  ],
  npmClient: 'npm',
});
