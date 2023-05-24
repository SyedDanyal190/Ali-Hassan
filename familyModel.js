const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImranSchema = new Schema({
  name: String,
  email: String,
  password: String,
  
});

const Imran = mongoose.model('Imran', ImranSchema);
module.exports = Imran;