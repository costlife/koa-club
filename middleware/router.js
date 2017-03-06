const fs = require('fs');
const Router = require('koa-router');
const api = new Router({
    prefix: '/api/v1',
});

const files = fs.readdirSync('./api/');
files.forEach((file) => {
    const sub = require(`../api/${file}`);
    api.use(sub.routes(), sub.allowedMethods());
});

module.exports = api;