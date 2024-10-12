const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const JobTag = sequelize.define(
  "JogTag",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tags",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
      allowNull: false,
    },
  },
  {
    tableName: "job-tags",
    timestamps: true,
  }
);

module.exports = JobTag;
