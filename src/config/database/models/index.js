var glob = require('glob');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../database');
const db = {};

const sequelize = new Sequelize(config);

const files = glob.sync('./src/app/**/*.model.js');

files.forEach(file => {
  const model = sequelize.import('../../../../' + file);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
