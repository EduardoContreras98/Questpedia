const express = require('express');
const QuestionService = require('../services/question.service');
const service = new QuestionService;
const validatorHandler = require('./../middlewares/validator.handler');
const { createQuestionDto, getQuestionId } = require ('../dtos/question.dto');
const router = express.Router();

//Traes todas las preguntas

router.get('/', (req, res, next) => {
    try {
      const {size} = req.query;
      const question = service.find(size || 10);
      res.json({
        'success': true,
        'message': 'Se han traido todas las preguntas',
        'Data': question
      });
    } catch (error) {
      next(error);
    }
});

router.post('/', validatorHandler(createQuestionDto, 'body'), (req, res, next) => {
    try {
      const body = req.body;
      const question = service.create(body);
      res.json({
       'success': true,
       'message': 'Se ha agregado la pregunta',
       'Data': question
      });
    } catch (error) {
      next(error);
    }
});

router.get('/:id', validatorHandler(getQuestionId, 'params'), (req, res, next) => {
    try {
      const { id } = req.params;
      const question = service.findOne(id);
      res.json({
       'success': true,
       'message': 'Se encontro la siguiente pregunta',
       'Data': question
      });
    } catch (error) {
      next(error);
    }
});

router.delete('/:id', validatorHandler(getQuestionId, 'params') ,(req, res, next) => {
    try {
      const { id } = req.params;
      const question = service.delete(id);
      res.json({
        'success': true,
        'message': 'Se ha eliminado la siguiente pregunta',
        'Data': question
      });
    } catch (error) {
      next(error);
    }
});
module.exports = router;
