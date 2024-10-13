"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn("notifications", "created_at", {
    //   type: Sequelize.DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // });

    await queryInterface.addColumn("notifications", "updated_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("notifications", "created_at");
    await queryInterface.removeColumn("notifications", "updated_at");
  },
};
