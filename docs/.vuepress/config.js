const treeLoader = require("./dirTree.js");
const defaultPath = "./docs";

module.exports = {
  title: "UOM:RE", // Title for the site. This will be displayed in the navbar.
  description: "jaewon github pages for blog",
  base: "/uoM/",
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-28HK5PF5T0",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-28HK5PF5T0');",
      ],
    ],
  ],
  plugins: [
    [require("./plugins/dirTree")],
    ["sitemap", { hostname: "https://reone1.github.com/uoM/" }],
  ],
  themeConfig: {
    favicon: "https://avatars0.githubusercontent.com/u/18749057?s=120&v=4",
    logo: "https://ca.slack-edge.com/T0239NMDLTZ-U02CJ1PGF54-c7ee88dcd395-72",
    sidebar: treeLoader.dirTree(defaultPath),
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "http://github.com/Reone1" },
    ],
    smoothScroll: true,
  },
};
