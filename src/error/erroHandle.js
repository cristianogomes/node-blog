const { show } = require('../config');

const erroHandle = (err, req, res, next) => {
  show.error({ message: err.message });

  res.status(err.status || 500);
  res.json({ message: err.message });

  next();
};

module.exports = {
  erroHandle
};
