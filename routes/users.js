const userRouter = require('express').Router();
const {
  validationGetRequest,
  validationUpdateUser,
} = require('../middlewares/validation');
const {
  getUser, updateUser,
} = require('../controllers/users');

userRouter.get('/me', validationGetRequest, getUser);

userRouter.patch('/me', validationUpdateUser, updateUser);

module.exports = {
  userRouter,
};
