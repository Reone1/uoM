const fs = require('fs');
const defaultPath = './docs'

const dirTree =  (dirname) => {
  let path = defaultPath + `/${dirname}` 
  let list = fs.readdirSync(path)
  let result = [];  
  for (let fileName of list) {
    let stat = fs.statSync(path + `/${fileName}`)
    if (stat.isFile() && !/^README/.test(fileName)) {
      result.push(`/${dirname}/${fileName}`)
    }
  }
  return result
}
module.exports = dirTree