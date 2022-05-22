const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
    name: String,
    animal: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Dashboard', userSchema);