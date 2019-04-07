const { express, show } = require('../config');
const routes = require('../routes');

const listen = () => {
  const app = express.init();
  routes.init(app);

  app.listen(3000, () => {
    show.debug('Servidor iniciado');
  });
};

module.exports = {
  listen
};
