const applicationResourceOptions = {
  navigation: "Job Applications",
  editProperties: ["status", "application_date", "invitation_date"],
  filterProperties: ["status", "application_date"],
  listProperties: ["id", "status", "application_date"],
  showProperties: ["id", "status", "application_date", "invitation_date"],
};

module.exports = { applicationResourceOptions };
