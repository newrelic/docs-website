'use strict';

const { connection: sequelize } = require('./db_connection');
const { DataTypes } = require('sequelize');

const Job = require('./models/job');
const Locale = require('./models/locale');
const Status = require('./models/status');
const Translation = require('./models/translation');
const TranslationsJobs = require('./models/translations_jobs');

module.exports = {
  Job: Job(sequelize, DataTypes),
  Locale: Locale(sequelize, DataTypes),
  Status: Status(sequelize, DataTypes),
  Translation: Translation(sequelize, DataTypes),
  TranslationsJobs: TranslationsJobs(sequelize, DataTypes),
};
