'use strict';

const { Sequelize } = require('sequelize');

const getConnectionInfo = () => {
  try {
    return JSON.parse(process.env.DB_CONNECTION_INFO);
  } catch (e) {
    console.log(
      `Unable to parse DB_CONNECTION_INFO environment variable. Please ensure this value is correctly set.\nCurrent value is: ${process.env.DB_CONNECTION_INFO}.`
    );

    process.exit(1);
  }
};

const connectionInfo = getConnectionInfo();

module.exports.connection = new Sequelize({
  ...connectionInfo,
  dialect: 'postgres',
  logging: false,
});
