const router = require('koa-router')();
// Must be used before any router is used

router.get('/index', async(ctx, next) => {
    ctx.state = {
        session: this.session,
        title: 'app'
    };

    await ctx.render('index', {
        user: 'John'
    });
});
module.exports = router;