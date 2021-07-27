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
const Status = require('./status');

/**
 * Method to create an instance of the Job model.
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns {ModelCtor<Model<Job>>} instance of Job model
 */
module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      job_uid: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      batch_uid: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: Status(sequelize, DataTypes),
          key: 'status',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
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

  return job;
};
