const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    dentist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dentists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
      allowNull: false,
    },
    job_posting_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "job_postings",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "rejected", "invited"),
      allowNull: false,
    },
    application_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    invitation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "applications",
    timestamps: true,
  }
);

module.exports = Application;
