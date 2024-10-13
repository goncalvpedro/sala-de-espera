module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("dentists", "updated_at", {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("dentists", "created_at");
    await queryInterface.removeColumn("dentists", "updated_at");
  },
};
