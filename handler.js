const handler = (req, res) => {
  console.log(req.app.mountpath);
  console.log(req.baseUrl);

  res.send('This is a test request');
};

module.exports = handler;
