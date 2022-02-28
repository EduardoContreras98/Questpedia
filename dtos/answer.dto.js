const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string().uuid();
const question = Joi.string().uuid();
const answer = Joi.string().min(3);
const user = Joi.string().alphanum().min(5);
const date = Joi.date();
const check = Joi.boolean();
const votes_p = Joi.number();
const votes_n = Joi.number();


const createAnswerDto = Joi.object({
  question: question,
  answer: answer.required(),
  user: user.required(),
  date: date.required(),
  check: check,
  votes_p: votes_p,
  votes_n: votes_n
});

const getAnswerId = Joi.object({
  id: id.required()
});

module.exports = { createAnswerDto, getAnswerId };
