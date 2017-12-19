const Card = require('../model/cardSchema');

const getCards = async (ctx) => {
  try {
    const cards = await Card.getCards();
    ctx.send(cards);
  } catch (e) { }
}

const newCard = async (ctx) => {
  try {
    ctx.body = await Card.newCard(ctx.body);
    await ctx.send(ctx.body);
  } catch (e) { }
}

module.exports = {
  getCards,
  newCard
}