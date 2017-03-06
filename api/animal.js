const router = require('koa-router')();


router.get('/animal', async(ctx, next) => {
    ctx.body = {
        name: 'costlife',
    };
});

module.exports = router;