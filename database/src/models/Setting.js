const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Setting = sequelize.define(
  "Setting",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
      allowNull: false,
    },
    notification_preferences: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    profile_visibility: {
      type: DataTypes.ENUM("public", "private"),
      allowNull: false,
    },
  },
  {
    tableName: "settings",
    timestamps: true,
  }
);

module.exports = Setting;
