const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Tag = sequelize.define(
  "Tag",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "tags",
    timestamps: true,
  }
);

module.exports = Tag;
