// 具体配置文档: https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5

module.exports = [{
    text: '组件资产',
    link: '/comps/',
    items: [{
      text: '中后台组件',
      link: '/comps/midBack/'
    }]
  },
  {
      text: '普通菜单',
      link: '/guide/'
  },
  {
      text: '多级菜单',
      link: '/baodian/',
      items: [{
              text: '菜单一',
              link: '/baodian/zero/'
          },
          {
              text: '菜单二',
              link: '/baodian/high/'
          },
      ]
  },
  {
    text: '工具箱',
    items: [{
        text: '在线编辑',
        items: [{
          text: '图片压缩',
          link: 'https://tinypng.com/'
        }]
      },
      {
        text: '在线服务',
        items: [{
            text: '阿里云',
            link: 'https://www.aliyun.com/'
          },
          {
            text: '腾讯云',
            link: 'https://cloud.tencent.com/'
          }
        ]
      },
      {
        text: '博客指南',
        items: [{
            text: '掘金',
            link: 'https://juejin.im/'
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/'
          }
        ]
      }
    ]
  },
  {
    text: '外链',
    link: 'https://www.163.com'
  },
]
