"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("job_tags", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      tag_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "tags",
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("job_tags");
  },
};
