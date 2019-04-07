const { erroHandle } = require('../error');
const home = require('./home');

const init = app => {
  app.use('/', home);
  app.use(erroHandle);
};

module.exports = {
  init
};
