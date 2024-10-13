const userResourceOptions = {
  navigation: "Users Management",
  editProperties: [
    "name",
    "email",
    "password",
    "profile_picture",
    "bio",
    "is_verified",
  ],
  filterProperties: [
    "name",
    "email",
    "is_verified",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "email", "is_verified", "createdAt"],
  showProperties: [
    "id",
    "user_type",
    "name",
    "email",
    "profile_picture",
    "bio",
    "is_verified",
    "createdAt",
    "updatedAt",
  ],
};

module.exports = { userResourceOptions };
