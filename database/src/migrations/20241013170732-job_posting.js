'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('job_postings', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.addColumn('job_postings', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('job_postings', 'created_at');
    await queryInterface.removeColumn('job_postings', 'updated_at');
  }
};
