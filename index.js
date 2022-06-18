const express = require('express');

const handler = require('./handler');
const userRouter = require('./router');

const app = express();
const admin = express();

app.use('/admin', admin);

admin.get('/dashboard', (req, res) => {
  res.send('admin dashboard');
});

app.use('/', userRouter);

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
