const fs = require('fs');
const Router = require('koa-router');
const join = require('path').join
const api = new Router({
    prefix: '/api',
});
process.router = api;
const mainPath = __dirname + '/../api/';
const files = fs.readdirSync(mainPath);
readerSync(mainPath, files);
function readerSync(path, files) {
  files.forEach((file) => {
    try {
      if (!fs.statSync(join(path, file)).isDirectory()) {
        const sub = require(join(path, file));
      } else {
        readerSync(join(path, file), [...fs.readdirSync(join(path, file))])
      }
    } catch (e) {
      console.log(e)
    }
  });
}

module.exports = api