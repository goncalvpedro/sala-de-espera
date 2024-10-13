'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn("job_postings", "created_at");
    await queryInterface.removeColumn("job_postings", "updated_at");
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.addColumn("job_postings", "created_at", {
    //   type: Sequelize.DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // });

    // await queryInterface.addColumn("job_postings", "updated_at", {
    //   type: Sequelize.DataTypes.DATE,
    //   allowNull: false,
    // });
  }
};
