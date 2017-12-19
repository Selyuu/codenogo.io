const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: { type: String, required: true},
    date: {type: String, required: true},
    code: {type: Array, required: true}
})

const Card = mongoose.model('card', cardSchema);

Card.createItem = async (data) => {
  const item = new Card({
    title: data.title,
    date: data.date,
    code: data.score
  })
  await item.save();
}

module.exports = Card;
