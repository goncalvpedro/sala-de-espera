const jobPostingResourceOptions = {
  navigation: "Job Listings",
  editProperties: [
    "title",
    "description",
    "requirements",
    "working_conditions",
    "location",
  ],
  filterProperties: ["title", "location", "created_at"],
  listProperties: ["id", "title", "location", "created_at"],
  showProperties: [
    "id",
    "title",
    "description",
    "requirements",
    "working_conditions",
    "location",
    "created_at",
  ],
};

module.exports = { jobPostingResourceOptions };
