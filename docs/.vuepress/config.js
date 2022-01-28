const treeLoader = require("./dirTree.js");
const defaultPath = "./docs";

module.exports = {
  title: "UOM:RE", // Title for the site. This will be displayed in the navbar.
  description: "jaewon github pages for blog",
  base: "/uoM/",
  plugins: [
    [require("./plugins/dirTree")],
    ["sitemap", { hostname: "https://reone1.github.com/uoM/" }],
  ],
  themeConfig: {
    logo: "https://avatars0.githubusercontent.com/u/18749057?s=120&v=4",
    sidebar: treeLoader.dirTree(defaultPath),
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "http://github.com/Reone1" },
    ],
    smoothScroll: true,
  },
};
