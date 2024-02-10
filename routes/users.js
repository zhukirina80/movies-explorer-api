const userRouter = require('express').Router();
const {
  validationUpdateUser,
} = require('../middlewares/validation');
const {
  getUser, updateUser,
} = require('../controllers/users');

userRouter.get('/me', getUser);

userRouter.patch('/me', validationUpdateUser, updateUser);

module.exports = {
  userRouter,
};
