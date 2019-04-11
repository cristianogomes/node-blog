const { User } = require('../../config/database/models');

const index = (req, res, next) => {
  res.send('Home - Index!');
};

const data = async (req, res) => {
  const list = await User.findAll();
  res.send(list);
};

module.exports = {
  index,
  data
};
