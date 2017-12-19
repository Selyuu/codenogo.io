const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = require('./router');

app
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);
console.log('-----------------');
console.log('listening on 3000');
console.log('-----------------');
