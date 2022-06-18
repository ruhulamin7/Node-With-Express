const handler = (req, res) => {
  res.send('This is a test request');
  console.log(req);
};

module.exports = handler;
