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
      {
        title: 'React',   // required
        path: '/React/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1,    // optional, defaults to 1
        children: dirTree('React')
      },
      {
        title:'Nodejs',
        path:'/Nodejs/',
        children: dirTree('Nodejs')
      },
      { 
        title: 'Database',
        path:'/Database/',
        children:dirTree('Database')
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'http://github.com/Reone1/uoM' }
    ],
  }
}
