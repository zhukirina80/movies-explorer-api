const router = require('express').Router();
const { userRouter } = require('./users');
const { movieRouter } = require('./movies');
const NotFoundError = require('../errors/NotFoundError');
const auth = require('../middlewares/auth');
const { validationUser, validationCreateUser } = require('../middlewares/validation');
const {
  createUser, login,
} = require('../controllers/users');

router.post('/signin', validationUser, login);
router.post('/signup', validationCreateUser, createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = {
  router,
};
