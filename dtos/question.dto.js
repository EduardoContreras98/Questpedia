const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string().uuid();
const title = Joi.string().min(3);
const comment = Joi.string();
const user = Joi.string().alphanum().min(5);
const category = Joi.string().min(3);
const date = Joi.date();


const createQuestionDto = Joi.object({
  title: title.required(),
  comment: comment.required(),
  user: user.required(),
  category: category.required(),
  date: date.required()
});

const getQuestionId = Joi.object({
  id: id.required()
});

module.exports = { createQuestionDto, getQuestionId};
