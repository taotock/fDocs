module.exports = {
  '/guide':[
    {
      title: "介绍",
      collapsable: false,
      children: ["/guide/introduce.md"],
    },
  ],
  '/component':
  [{
    title: "开发指南",
    collapsable: false,
    children: [
      "/component/installation", 
      "/component/quickstart",
      "/component/changelog"
    ],
  },
  {
    title: "组件",
    collapsable: false,
    children: [
      "/component/color",
      "/component/alert",
      "/component/button",
      "/component/checkbox",
      "/component/icon",
      "/component/input",
      "/component/pagination",
      "/component/radio",
      "/component/rate",
      "/component/select",  
      "/component/table",
    ],
  },
  
],
'/document':[
  {
    title: "其他插件",
    collapsable: false,
    children: [
      "/document/cli",
      "/document/calendar",
      "/document/infinitescroll",
      "/document/pullrefresh",
    ]
  },
]
}