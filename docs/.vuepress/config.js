module.exports = 
{
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
  description: 'Just playing around',
  base:'/uoM/',
  themeConfig: {
    sidebar: [
      {
        title: 'TIL',   // required
        path: '/TIL/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/TIL/TIL-20210320',
          '/TIL/TIL-20210321'
        ]
      },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'http://github.com/Reone1' }
    ],
  }
}
