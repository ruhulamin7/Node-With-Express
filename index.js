const express = require('express');
const app = express();
// const ejs = require('ejs');
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Ruhul' });
});

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
