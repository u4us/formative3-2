var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// this will be our data base's data structure 
var ReviewSchema = new Schema(
  {
    id: Number,
    flavour: String,
    parlour: String,
    rating: Number,
    user: String,
    photo: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Review', ReviewSchema);