const express = require('express');
const foodRouter = require('./routes/foodRouter');

const printMode = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
  } else if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
  }
  next();
};
const app = express();
const router = express.Router();
app.use(express.json());
app.use(printMode);
app.use(router);
app.use('/api/foods', foodRouter);
module.exports = app;
