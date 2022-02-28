const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string().uuid();
const name = Joi.string().min(3);

const createCategoryDto = Joi.object({
  name: name.required()
});

const updateCategoryDto = Joi.object({
  name: name
});

const getCategoryId = Joi.object({
  id: id.required()
});

module.exports = { createCategoryDto, updateCategoryDto, getCategoryId };
