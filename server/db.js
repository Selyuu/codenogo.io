const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data_list');

module.exports = mongoose;