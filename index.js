const express = require('express');
const app = express();

function logger(options) {
  return (req, res, next) => {
    if (options) {
      console.log(`${req.url} => ${Date.now()}`);
      next();
    } else {
      next();
    }
  };
}
// app.use(logger);

const userRouter = express.Router();
userRouter.use(logger({ log: true }));
userRouter.get('/list', function (req, res, next) {
  res.send('hello user');
  next();
});

const adminRouter = express.Router();
adminRouter.get('/list', function (req, res) {
  res.send('hello admin');
});

app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
