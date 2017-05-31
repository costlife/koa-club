const router = require('koa-router')();
const fs = require('fs');

router.post('/file', async(ctx, next) => {
    const {
        req,
        res
    } = ctx;
    console.log(res.arrayBuffer())
    var fileSize = req.headers['content-length'];
    var body = '';
    req.on('data', function(chunk) {
        // var str = String.fromCharCode.apply(null, new Uint8Array(chunk));
        // console.log(str)
        //

        //chunk = chunk.slice(134, chunk.length - 46);

        fs.appendFile('test2', chunk, 'binary', function(err) {
            err || console.log('done')
        });
        body += chunk;
        console.log('chunk: ' + Buffer.byteLength(chunk) + ' bytes');
    });

    req.on('end', function() {
        console.log('body: ' + Buffer.byteLength(body) + ' bytes');
    });
    ctx.body = {
        name: 'costlife',
    };
});

module.exports = router;