const express = require('express');
const app = express();
app.use(express.json());

function myMiddleware(req, res, next) {
  try {
    console.log(a);
  } catch (err) {
    throw Error(err.message);
  }
  console.log(b);
  console.log('middleware1');
  next();
}
function myMiddleware2(req, res, next) {
  console.log('middleware2');
  next();
}
// app.use(myMiddleware);
app.use([myMiddleware, myMiddleware2]);

app.get('/', function (req, res, next) {
  console.log('hello1');
  next();
});
app.get('/', function (req, res, next) {
  next();
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(500).send(err.message);
}

app.listen(5000, (err, res) => {
  console.log('Server is listening on port 5000');
});
