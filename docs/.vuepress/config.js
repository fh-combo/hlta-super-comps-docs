// 具体配置文档: https://vuepress.vuejs.org/zh/guide/

module.exports = {
  title: 'super-comps',
  description: '这是简短描述...',
  dest: './dist',

  // LOGO大图配置
  head: [
    [
      'script', {
        src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.slim.min.js'
      }
    ],
    ['script', {
      src: 'https://cdn.bootcdn.net/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js'
    }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://cdn.bootcdn.net/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css'
    }],
    ['link', {
      rel: 'icon',
      href: '/07-ACT-040120-p26-PT-Superman-HR.jpg'
    }]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {

    // 右上角导航菜单
    nav: require('./nav'),

    // 文档侧边栏
    sidebar: require('./sidebar'),

    // 侧边栏展开下潜深度
    sidebarDepth: 2,

    // 记录编辑/更新修改时间
    // 需要传到git仓库(vuepress才能获取并显示)
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  },

  plugins: [
    'vuepress-plugin-photo-swipe'
  ]
}
