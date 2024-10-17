const userController = require("../controllers/usersController");
const validation = require('../middlewares/validation')
const express = require("express");

const userRouter = express.Router()

userRouter.get('/users', userController.fetchUsers);
userRouter.get('/users/:id', userController.fetchUsersById);
userRouter.post('/users/create-user', validation.validateUser, userController.createUser);


module.exports = userRouter;
