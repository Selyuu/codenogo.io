const Router = require('koa-router'),
      router = new Router();

const CardDataController = require('./controller/card.controller');

router
  .get('/', CardDataController.getCards),
  .post('/new', CardDataController.newCard);

  module.exports = router;
