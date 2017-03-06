const router = require('koa-router')();
const userService = require('../service/userService');

router.get('/users', async(ctx, next) => {
    let cusor = ctx.query.cusor;
    this.result = await userService.getList(cusor);
    next();
}, (ctx, next) => {
    ctx.body = {
        code: 0,
        data: this.result
    };
});

router.get('/users/:uid', async(ctx, next) => {
    let result = await userService.getById();
    ctx.body = {
        code: 0,
        data: result
    };
});

router.post('/user', async(ctx, next) => {
    let result = await userService.add(ctx.request.body);
    ctx.body = result
});

router.put('/users/:id', async(ctx, next) => {
    let result = await userService.update(ctx.params.id, ctx.request.body);
    ctx.body = result;
});


router.delete('/users/:id', async(ctx, next) => {
    let result = await userService.deleteById(ctx.params.id);
    ctx.body = result;
});

module.exports = router;