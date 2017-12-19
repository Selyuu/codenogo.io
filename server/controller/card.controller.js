const Card = require('../model/cardSchema');

const getCards = async (ctx) => {
  try {
    const cards = await Card.getCards();
    ctx.send(cards);
  } catch (e) { }
}

const newCard = async (ctx) => {
  try {
    ctx.response.body = await Card.newCard(ctx.request.body);
    await ctx.send(ctx.response.body);
  } catch (e) { }
}

module.exports = {
  getCards,
  newCard
}