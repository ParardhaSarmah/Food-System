const foodItem = require('../models/foodModel');

exports.getAllFood = async (req, res) => {
  try {
    const food = await foodItem.find();
    res.status(200).json({
      status: 'success',
      // itemCount: food.length,
      data: {
        food,
      },
    });
  } catch (err) {
    res.status.json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getFoodInfo = async (req, res) => {
  try {
    const food = await foodItem.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      id: req.params.id,
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.addFood = async (req, res) => {
  try {
    const newFood = await foodItem.create(req.body);
    // console.log(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        food: newFood,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateFood = async (req, res) => {
  try {
    const food = await foodItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // console.log(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        food: food,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    await foodItem.findByIdAndDelete(req.params.id);
    console.log(req.body);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
