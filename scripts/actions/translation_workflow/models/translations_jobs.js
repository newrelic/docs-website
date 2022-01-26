'use strict';
/// <reference path="./typedefs.js" />

const {
  Sequelize,
  DataTypes,
  Deferrable,
  ModelCtor,
  Model,
} = require('sequelize');

const Translation = require('./translation');
const Job = require('./job');

/**
 * Method to create an instance of the TranslationsJobs model.
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns {ModelCtor<Model<TranslationsJobs>>} instance of TranslationsJobs
 */
module.exports = (sequelize, DataTypes) => {
  const translationsJobs = sequelize.define(
    'translations_jobs',
    {
      translation_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Translation,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        primaryKey: true,
        onDelete: 'CASCADE',
      },
      job_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Job,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        primaryKey: true,
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      tableName: 'translations_jobs',
      createdAt: false,
      updatedAt: false,
    }
  );

  const translation = Translation(sequelize, DataTypes);
  const job = Job(sequelize, DataTypes);

  translation.belongsToMany(job, {
    through: 'translation_jobs',
  });

  job.belongsToMany(translation, {
    through: 'translation_jobs',
  });

  return translationsJobs;
};
