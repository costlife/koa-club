const fs = require('fs');
const Router = require('koa-router');
const api = new Router({
    prefix: '/action',
});
process.routerAction = api;
const path = __dirname + '/../action/';
const files = fs.readdirSync(path);
files.forEach((file) => {
  try {
    const sub = require(path + file);
  } catch (e) {
    console.log(e)
  }
});

module.exports = api;