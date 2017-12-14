const actions = require('./middleware/action');
const api = require('./middleware/api');
const logger = require('./middleware/logger');
const front = require('./middleware/front');
const koaBody = require('koa-body');
const main = (app) => {

    app.use(logger);

    // parsing post params to ctx.request.body
    app.use(koaBody({
        multipart: true,
        formidable: {
            uploadDir: __dirname
        }
    }));

    // serve static files && templates
    front(app);

    app.use(api.routes());
    app.use(actions.routes());
    // init routers
}

module.exports = main;