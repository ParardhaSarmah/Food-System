const express = require('express');
const foodControllers = require('../controllers/foodController');

const router = express.Router();
router.route('/').get(foodControllers.getAllFood).post(foodControllers.addFood);
router
  .route('/:id')
  .get(foodControllers.getFoodInfo)
  .patch(foodControllers.updateFood)
  .delete(foodControllers.deleteFood);
module.exports = router;
