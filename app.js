require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/rateLimiter');
const { DB_ADDRESS } = require('./config');
const { router } = require('./routes');
const serverError = require('./middlewares/serverError');

const { PORT = 3001 } = process.env;

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(limiter);

app.use(errors());

app.use(serverError);

mongoose.connect(DB_ADDRESS);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
