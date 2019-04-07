const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const init = () => {
  const app = express();
  app.use(helmet());
  app.use(cors());

  return app;
};

module.exports = {
  init
};
