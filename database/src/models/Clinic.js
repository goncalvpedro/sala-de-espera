const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Clinic = sequelize.define(
  "Clinic",
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
    clinic_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    services: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    contact_number: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  },
  {
    tableName: "clinics",
    timestamps: true,
  }
);

module.exports = Clinic;
