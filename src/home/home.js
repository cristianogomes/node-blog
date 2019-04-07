const index = (req, res, next) => {
  // let erro = Error('Error test');
  // erro.status = 501;
  // next(erro);

  res.send('Home - Index!');
};

const data = (req, res) => {
  res.send(new Date());
};

module.exports = {
  index,
  data
};
