'use strict';
/// <reference path="./typedefs.js" />

const { Sequelize, DataTypes, ModelCtor, Model } = require('sequelize');

/**
 * Method to create an instance of the Locale model.
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns {ModelCtor<Model<Locale>>} instance of Locale model
 */
module.exports = (sequelize, DataTypes) => {
  const locale = sequelize.define('locale', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    locale: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  });

  return locale;
};
