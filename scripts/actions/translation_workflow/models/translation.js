'use strict';
/// <reference path="./typedefs.js" />

const {
  Sequelize,
  DataTypes,
  Deferrable,
  ModelCtor,
  Model,
} = require('sequelize');

const Locale = require('./locale');

/**
 * Method to create an instance of the Translation model.
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns {ModelCtor<Model<Translation>>} instance of Translation model
 */
module.exports = (sequelize, DataTypes) => {
  const translation = sequelize.define(
    'translation',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      slug: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      locale: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: Locale(sequelize, DataTypes),
          key: 'locale',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      },
    },
    {
      createdAt: 'date_created',
      updatedAt: 'date_modified',
    }
  );

  return translation;
};
