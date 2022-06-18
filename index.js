const { request } = require('express');
const express = require('express');
const app = express();
// const userRouter = require('./router');

// middleware
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded());

// router middleware
const router = express.Router();
app.use(router);

router.get('/router', (req, res) => {
  res.send('This is router');
});

// raw file reading request
app.post('/raw', (req, res) => {
  const result = req;
  console.log(req.body);
  res.send(req.body);
});

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
