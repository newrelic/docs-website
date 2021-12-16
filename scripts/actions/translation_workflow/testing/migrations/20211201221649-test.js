'use strict';

const {
  Sequelize,
  QueryInterface,
  DataTypes,
  Deferrable,
} = require('sequelize');

module.exports = {
  up: /** @param {QueryInterface} queryInterface @param {Sequelize} Sequelize */ async (
    queryInterface,
    Sequelize
  ) => {
    await queryInterface.createTable('locales', {
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
    await queryInterface.createTable('statuses', {
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
    });
    await queryInterface.createTable('jobs', {
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
          model: 'statuses',
          key: 'status',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      locale: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: 'locales',
          key: 'locale',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      project_id: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date_created: {
        type: DataTypes.DATE,
      },
      date_modified: {
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable('translations', {
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
          model: 'locales',
          key: 'locale',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      project_id: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date_created: {
        type: DataTypes.DATE,
      },
      date_modified: {
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable('translations_jobs', {
      translation_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'translations',
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        primaryKey: true,
        onDelete: 'CASCADE',
      },
      job_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'jobs',
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        primaryKey: true,
        onDelete: 'CASCADE',
      },
    });
    await queryInterface.bulkInsert('statuses', [
      { status: 'PENDING' },
      { status: 'IN_PROGRESS' },
      { status: 'IN_REVIEW' },
      { status: 'COMPLETED' },
      { status: 'ERRORED' },
    ]);
    await queryInterface.bulkInsert('locales', [
      {
        locale: 'ja-JP',
      },
    ]);
  },

  down: /** @param {QueryInterface} queryInterface @param {Sequelize} Sequelize */ async (
    queryInterface,
    Sequelize
  ) => {
    await queryInterface.dropAllTables();
  },
};
