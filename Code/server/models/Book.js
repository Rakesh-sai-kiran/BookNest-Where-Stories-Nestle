const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  title: String,
  price: String
});
module.exports = mongoose.model('Book', BookSchema);