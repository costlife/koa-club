const router = require('./middleware/router');
const logger = require('./middleware/logger');
const koaBody = require('koa-body')();
const main = (app) => {

    app.use(logger);

    // parsing post params to ctx.request.body
    app.use(koaBody);

    // init routers
    app.use(router.routes());
}

module.exports = main;