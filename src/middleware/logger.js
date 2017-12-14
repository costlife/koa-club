const log4js = require('log4js');
log4js.configure(__dirname + '/../config/log4js.json');
const loggerAccess = log4js.getLogger("access");

const logger = require('koa-logger')();

const log = async(ctx, next) => {
    const start = new Date();
    await logger(ctx, next);
    const cost = new Date() - start;
    // ctx.set('X-Response-Time', `${cost}ms`);
    console.log(cost);
    const time = new Date();
    const status = ctx.status;
    const remoteIp = ctx.req.headers['x-forwarded-for']
        || ctx.req.connection.remoteAddress
        || ctx.req.socket.remoteAddress
        || ctx.req.connection.socket.remoteAddress;
    const method = ctx.method;
    loggerAccess.info(`${ctx.path} ${remoteIp} method=${method} cost=${cost} status=${status}`);
}


module.exports = log;