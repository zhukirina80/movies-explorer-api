const router = require('express').Router();
const { userRouter } = require('./users');
const { movieRouter } = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = {
  router,
};
