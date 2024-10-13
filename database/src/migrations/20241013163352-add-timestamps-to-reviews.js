"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn("reviews", "created_at", {
    //   type: Sequelize.DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // });

    await queryInterface.addColumn("reviews", "updated_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("reviews", "created_at");
    await queryInterface.removeColumn("reviews", "updated_at");
  },
};
