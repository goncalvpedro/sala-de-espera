"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("clinics", "created_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    await queryInterface.addColumn("clinics", "updated_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("clinics", "created_at");
    await queryInterface.removeColumn("clinics", "updated_at");
  },
};
