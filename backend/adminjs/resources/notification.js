const notificationResourceOptions = {
  navigation: "User Notifications",
  editProperties: ["message", "is_read", "type"],
  filterProperties: ["is_read", "type", "created_at"],
  listProperties: ["id", "message", "is_read", "type", "created_at"],
  showProperties: ["id", "message", "is_read", "type", "created_at"],
};

module.exports = { notificationResourceOptions };
