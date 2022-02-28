const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string().uuid();
const name = Joi.string().min(3);
const age = Joi.number().integer().min(18).max(50);
const email = Joi.string().email();
const username = Joi.string().alphanum().min(5);
const password = Joi.string().alphanum().min(8);

const createUserDto = Joi.object({
  name: name.required(),
  email: email.required(),
  age: age,
  username: username.required(),
  password: password.required()
});

const updateUserDto = Joi.object({
  name: name,
  age: age,
  email: email,
  username: username,
  password: password
});

const getUserId = Joi.object({
  id: id.required()
});

module.exports = { createUserDto, updateUserDto, getUserId };
