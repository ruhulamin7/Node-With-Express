const express = require('express');
const userRouter = express.Router();

userRouter.get('/create', (req, res) => {
  console.log('router module first');
});

module.exports = userRouter;
