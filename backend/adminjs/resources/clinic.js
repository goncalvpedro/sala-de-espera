const clinicResourceOptions = {
  navigation: "Clinic Management",
  editProperties: ["clinic_name", "address", "services", "contact_number"],
  filterProperties: ["clinic_name", "address", "contact_number"],
  listProperties: ["id", "clinic_name", "address", "contact_number"],
  showProperties: [
    "id",
    "clinic_name",
    "address",
    "services",
    "contact_number",
  ],
};

module.exports = { clinicResourceOptions };
