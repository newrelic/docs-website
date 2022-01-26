'use strict';

const { Sequelize } = require('sequelize');

const connectionInfo = JSON.parse(process.env.DB_CONNECTION_INFO);

module.exports.connection = new Sequelize({
  ...connectionInfo,
  dialect: 'postgres',
  logging: false,
});
