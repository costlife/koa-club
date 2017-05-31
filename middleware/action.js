const fs = require('fs');
const Router = require('koa-router');
const api = new Router();

const files = fs.readdirSync('./action/');
files.forEach((file) => {
    const sub = require(`../action/${file}`);
    api.use(sub.routes(), sub.allowedMethods());
});

module.exports = api;