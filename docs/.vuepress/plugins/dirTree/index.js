const { makeTree } = require("../../dirTree");

const returnTree = async (path) => {
  const tree = await makeTree(path);
  return tree;
};

module.exports = (options, ctx) => ({
  name: "custom-dirTree-generator",
  async extendPageData($page) {
    const { frontmatter } = $page;
    if (frontmatter.dirPath) {
      const path = "./docs/" + frontmatter.dirPath;
      const files = await returnTree(path);
      const list = files.map((fileName) => fileName.replace(".md", ""));
      $page[frontmatter.dirPath] = list;
    }
  },
});
