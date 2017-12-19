const Card = require('../model/cardSchema');

exports.getList = async (ctx) => {
  let results = Card.find({}, err => {
    if (err) throw err;
  })
  ctx.body = await results;
}