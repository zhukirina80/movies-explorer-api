const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    if (err.message === 'NotAuthenticate') {
      next(new UnauthorizedError('С токеном что-то не так'));
    } else if (err.name === 'JsonWebTokenError') {
      next(new UnauthorizedError('С токеном что-то не так'));
    } else {
      next(err);
    }
  }

  req.user = payload;

  next();
};
