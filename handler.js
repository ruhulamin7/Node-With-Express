const handler = (req, res) => {
  req.app.get('/user', function (req, res) {
    res.send('redirected to user');
  });
};



module.exports = handler;
