const reviewResourceOptions = {
  navigation: "Reviews",
  editProperties: ["rating", "comment"],
  filterProperties: ["rating", "created_at"],
  listProperties: ["id", "rating", "comment", "created_at"],
  showProperties: ["id", "rating", "comment", "created_at"],
};

module.exports = { reviewResourceOptions };
