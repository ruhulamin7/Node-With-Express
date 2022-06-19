const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  console.log(req.params);
});
app.param('userId', (req, res, next, id) => {
  console.log(id);
  next();
});

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
