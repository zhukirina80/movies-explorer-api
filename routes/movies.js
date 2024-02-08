const movieRouter = require('express').Router();
const {
  validationGetRequest,
  validationCreateMovie,
  validationMovieId,
} = require('../middlewares/validation');
const { getMovies, deleteMovie, createMovie } = require('../controllers/movies');

movieRouter.get('/', validationGetRequest, getMovies);

movieRouter.delete('/_id', validationMovieId, deleteMovie);

movieRouter.post('/', validationCreateMovie, createMovie);

module.exports = {
  movieRouter,
};
