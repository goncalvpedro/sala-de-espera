"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("job_tags", "created_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });

    await queryInterface.addColumn("job_tags", "updated_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("job_tags", "created_at");
    await queryInterface.removeColumn("job_tags", "updated_at");
  },
};
