const dirTree = require('./dirTree.js')
const defaultPath = './docs'

module.exports = 
{
  title: 'uoM', // Title for the site. This will be displayed in the navbar.
  description: 'jaewon github pages for blog',
  base:'/uoM/',
  themeConfig: {
    sidebar: dirTree(defaultPath),
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'http://github.com/Reone1/uoM' }
    ],
  }
}
