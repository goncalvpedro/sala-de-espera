const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Dentist = sequelize.define(
  "Dentist",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    cro: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "dentists",
    timestamps: true,
  }
);

module.exports = Dentist;
