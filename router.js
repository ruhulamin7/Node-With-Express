const express = require('express');
const userRouter = express.Router();

userRouter.get('/create', (req, res) => {
  console.log(req.app.mountpath);
  console.log('router module first');
});

module.exports = userRouter;
