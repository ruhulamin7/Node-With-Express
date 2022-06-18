const express = require('express');
const app = express();
app.set('name', 'Ruhul');
app.all('/admin', (req, res, next) => {
  res.send('all route');
  next();
});
app.get('/admin', (req, res) => {
  console.log(req.app.get('name'));
  console.log(app.enabled());
});

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
