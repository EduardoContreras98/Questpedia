const express = require('express');
const usersRouter = require('./users.router');
const categoryRouter = require('./category.router');
const questionRouter = require('./question.router');
const answerRouter = require('./answer.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  //ENDPOINTS DE LA V1
  router.use('/users', usersRouter);
  router.use('/categorys', categoryRouter);
  router.use('/questions', questionRouter);
  router.use('/answers', answerRouter);
}

module.exports = routerApi;
