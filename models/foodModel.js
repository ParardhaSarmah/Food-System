const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  foodName: {
    type: String,
    required: [true, 'A food item must have a name!'],
    unique: true,
    trim: true,
  },
  foodPrice: {
    type: Number,
    required: [true, 'A food item must have a price!'],
  },
  foodIngredients: {
    type: String,
    required: [true, 'A food item must have ingredients!'],
  },
  description: {
    type: String,
    required: [true, 'A food item must have a description!'],
  },
  summary: {
    type: String,
    required: [true, 'A food item must have a summary!'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity must be specified!'],
  },
});
const foodItem = mongoose.model('Food', foodSchema);
module.exports = foodItem;
