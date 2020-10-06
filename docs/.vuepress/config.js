module.exports = {
    title: 'CODE ZEVIN JIA',
    description: 'A personal website focused on sharing knowledge',
    base: '/vuepress-demo/',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo-nav.png' }], 
      // 自定义的网页标签图标
    ],
    themeConfig: {
      logo: '/logo-nav.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: 'BLOG', link: '/blog/' },
        {text: 'CSDN主页', link: 'https://blog.csdn.net/JZevin'}      
      ],
      sidebar: 'auto', // 侧边栏配置
    }
  }