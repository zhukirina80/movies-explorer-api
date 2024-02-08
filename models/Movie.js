const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        // eslint-disable-next-line no-useless-escape
        validator: (v) => validator.isURL(v) && /((http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-]))/.test(v),
        message: 'Некорректный URL',
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        // eslint-disable-next-line no-useless-escape
        validator: (v) => validator.isURL(v) && /((http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-]))/.test(v),
        message: 'Некорректный URL',
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        // eslint-disable-next-line no-useless-escape
        validator: (v) => validator.isURL(v) && /((http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-]))/.test(v),
        message: 'Некорректный URL',
      },
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: mongoose.Types.ObjectId,
      ref: 'movie',
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
