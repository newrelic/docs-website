'use strict';
/// <reference path="./typedefs.js" />

const { Sequelize, DataTypes, ModelCtor, Model } = require('sequelize');

/**
 * Method to create an instance of the Status model.
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns {ModelCtor<Model<Status>>} instance of Status model
 */
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define(
    'status',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'statuses',
    }
  );

  return status;
};
