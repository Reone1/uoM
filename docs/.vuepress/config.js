module.exports = {
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      '/_posts/2018-11-7-frontmatter-in-vuepress.md',
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'http://github.com/Reone1' }
    ],
  }
  // theme: '@vuepress/theme-blog',
  // themeConfig: {
    // Please keep looking down to see the available options.
  // }
}