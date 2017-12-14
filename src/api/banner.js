const router = process.router;
const bannerService = require('../service/bannerService');

router.get('/banner', async(ctx, next) => {
  const { cursor, limit } = ctx.request.query;
  let result = await bannerService.getList(cursor, 100);
  ctx.body = {
    code: 0,
    data: result
  };
});

router.get('/banner/:id', async(ctx, next) => {
    let result = await bannerService.getById(ctx.params.id);
    ctx.body = {
        code: 0,
        data: result
    };
});

router.post('/banner', async(ctx, next) => {
    let result = await bannerService.add(ctx.request.body);
    ctx.body = result
});

router.put('/banner/:id', async(ctx, next) => {
    let result = await bannerService.update(ctx.params.id, ctx.request.body);
    ctx.body = result;
});


router.delete('/banner/:id', async(ctx, next) => {
    let result = await bannerService.deleteById(ctx.params.id);
    ctx.body = result;
});

module.exports = router;