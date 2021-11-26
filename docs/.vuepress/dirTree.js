const fs = require("fs");

const isDir = (root, path) => {
  return fs.statSync(root + `/${path}`).isDirectory();
};

const isFile = (root, path) => {
  return fs.statSync(root + `/${path}`).isFile();
};

const readSideMenu = (path) => {
  const dirs = fs.readdirSync(path).filter((dirName) => {
    return isDir(path, dirName);
  });
  return dirs.filter((dir) => {
    return dir !== ".vuepress" && dir !== "src";
  });
};

const makeTree = (path) => {
  return fs.readdirSync(path).filter((dirName) => {
    return isFile(path, dirName) && !/^README/.test(dirName);
  });
};

const dirTree = (defaultPath) => {
  const menus = readSideMenu(defaultPath);
  return menus.map((menu) => {
    const files = makeTree(defaultPath + `/${menu}`);
    return {
      title: menu,
      path: `/${menu}/`,
      children: files.map((fileName) => `/${menu}/${fileName}`),
    };
  });
};

module.exports = { dirTree, makeTree, readSideMenu, isFile, isDir };
