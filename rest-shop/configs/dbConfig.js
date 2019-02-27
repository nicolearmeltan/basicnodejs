const CONFIG = require('../configs/configs.json'); 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONFIG.DB_CON, CONFIG.DB_USER, CONFIG.DB_PASS, {
  host: CONFIG.DB_HOST,
  port: CONFIG.DB_PORT,
  dialect: CONFIG.DB_DIALECT,
  operatorsAliases: false
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.video = require('../models/videoModel')(sequelize, Sequelize);

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize.sync().then(() => {
  console.log('Database synched')
})

module.exports = db;