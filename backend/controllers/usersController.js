const User = require("../../database/src/models/User");

module.exports = {
  // GET /users
  fetchUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: [
          "id",
          "user_type",
          "name",
          "last_name",
          "email",
          "profile_picture",
          "is_verified",
          "role",
        ],
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },

  // GET /users/:id
  fetchUsersById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: [
          "id",
          "user_type",
          "name",
          "last_name",
          "email",
          "profile_picture",
          "is_verified",
          "role",
        ],
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found." });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user." });
    }
  },

  // POST /users/create-user
  createUser: async (req, res) => {
    try {
      const { user_type, name, last_name, email, password, profile_picture, bio, is_verified, role } = req.body;
      const newUser = await User.create({ user_type, name, last_name, email, password, profile_picture, bio, is_verified, role })
      if (newUser) {
        res.status(201).json(newUser)
      } else {
        res.status(400).json({ error: "User not created. Empty request."})
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user.'})
    }
  },

  // PUT /users/update-personal-information
  updateUserInformation : async (req, res) => {

  },

  // DELETE /users/delete-user
  deleteUser: async (req, res) => {
    
  }

};
