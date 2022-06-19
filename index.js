const express = require('express');
const app = express();
const handler = require('./handler');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());
app.get('/', function (req, res) {
  console.log(req.cookies);
  res.send('Done');
});

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
