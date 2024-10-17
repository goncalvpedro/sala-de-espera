const clinicResourceOptions = {
  navigation: "Clinic Management",
  editProperties: ["clinic_name", "address", "services", "contact_number"],
  filterProperties: ["user_id", "clinic_name", "address", "contact_number"],
  listProperties: ["id", "user_id", "clinic_name", "address", "contact_number"],
  showProperties: [
    "id",
    "user_id",
    "clinic_name",
    "address",
    "services",
    "contact_number",
  ],
};

module.exports = { clinicResourceOptions };
