const dirTree = require('./dirTree.js')
module.exports = 
{
  title: 'uoM', // Title for the site. This will be displayed in the navbar.
  description: 'jaewon github pages for blog',
  base:'/uoM/',
  themeConfig: {
    sidebar: [
      {
        title: 'TIL',   // required
        path: '/TIL/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1,    // optional, defaults to 1
        children: dirTree('TIL')
      },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'http://github.com/Reone1' }
    ],
  }
}
