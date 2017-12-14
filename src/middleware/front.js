const views = require('koa-views');
const static = require('koa-static');
const {
    static_path,
    template_path
} = require('../config/front.json');

function front(app) {
    app.use(views(absPath(template_path), {
        map: {
            html: 'ejs'
        }
    }));
    app.use(static(absPath(static_path)));
};

function absPath(path) {
    return __dirname + '/..' + path
}

module.exports = front;