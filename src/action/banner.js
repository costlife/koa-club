const router = process.routerAction

router.get('/banner', async(ctx, next) => {
    await ctx.render('index', {
        data: 'test'
    });
});
module.exports = router;