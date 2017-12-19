const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: { type: String, required: true},
    date: {type: String, required: true},
    code: {type: Array, required: true}
})

const Card = mongoose.model('card', cardSchema);

Card.getCards = () => {
  return Card.find({}, (err, data) => {
    return data;
  })
}

Card.newCard = async (body) => {
  const card = new Card({
    title: body.title,
    date: body.date,
    code: body.code
  })
  await card.save();
  return card;
}

module.exports = Card;
