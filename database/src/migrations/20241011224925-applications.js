"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("applications", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      dentist_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "dentists",
          key: "id",
        },
        allowNull: false,
      },
      job_posting_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "job_postings",
          key: "id",
        },
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM("pending", "accepted", "rejected", "invited"),
        allowNull: false,
      },
      application_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      invitation_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("applications");
  },
};
