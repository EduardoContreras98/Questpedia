const express = require('express');
const AnswerService = require('../services/answer.service');
const service = new AnswerService;
const validatorHandler = require('./../middlewares/validator.handler');
const { createAnswerDto, getAnswerId } = require ('../dtos/answer.dto');
const router = express.Router();

//Traes todas las preguntas

router.get('/', (req, res, next) => {
    try {
      const {size} = req.query;
      const answer = service.find(size || 10);
      res.json({
        'success': true,
        'message': 'Se han traido todas las respuestas',
        'Data': answer
      });
    } catch (error) {
      next(error);
    }
});

router.post('/', validatorHandler(createAnswerDto, 'body'), (req, res, next) => {
    try {
      const body = req.body;
      const answer = service.create(body);
      res.json({
       'success': true,
       'message': 'Se ha agregado la respuesta',
       'Data': answer
      });
    } catch (error) {
      next(error);
    }
});


router.get('/:id', validatorHandler(getAnswerId, 'params'), (req, res, next) => {
    try {
      const { id } = req.params;
      const answer = service.findOne(id);
      res.json({
       'success': true,
       'message': 'Se encontro la siguiente respuesta',
       'Data': answer
      });
    } catch (error) {
      next(error);
    }
});

router.delete('/:id', validatorHandler(getAnswerId, 'params') ,(req, res, next) => {
    try {
      const { id } = req.params;
      const answer = service.delete(id);
      res.json({
        'success': true,
        'message': 'Se ha eliminado la siguiente respuesta',
        'Data': answer
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
