const treeLoader = require("./dirTree.js");
const defaultPath = "./docs";

module.exports = {
  title: "uoM TechLog", // Title for the site. This will be displayed in the navbar.
  description: "jaewon github pages for blog",
  base: "/",
  plugins: [["sitemap", { hostname: "https://reone1.github.com/" }]],
  smoothScroll: true,
  themeConfig: {
    sidebar: treeLoader.dirTree(defaultPath),
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "http://github.com/Reone1" },
    ],
  },
};
