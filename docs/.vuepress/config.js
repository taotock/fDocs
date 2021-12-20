const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')
const headConfig = require('./config/headConfig')

module.exports = {
  base: '/fDocs/',
  title: "Heaven",
  description: "轻量、可靠的 Vue 组件库",
  themeConfig: {
    search: false, //禁用默认的搜索框
    globalLayout: "/components/layout/GlobalLayout.vue",
    searchMaxSuggestions: 10, //搜索条数
    displayAllHeaders: true, //自动生成侧栏
    sidebar: "auto",
    nav: navConfig,
    sidebar:sidebarConfig, 
  },
  head: headConfig,
  plugins: [
    '@vuepress/back-to-top'
    // require('./enhanceApp')
  ],
};