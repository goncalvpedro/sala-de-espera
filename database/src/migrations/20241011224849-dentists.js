"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dentists", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      cro: {
        type: Sequelize.DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      specializations: {
        type: Sequelize.DataTypes.JSONB,
        allowNull: true,
      },
      experience: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      availability: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dentists");
  },
};
