const express = require('express');
const CategoryService = require('../services/category.service');
const service = new CategoryService;
const validatorHandler = require('./../middlewares/validator.handler');
const { createCategoryDto, updateCategoryDto, getCategoryId } = require ('../dtos/category.dto');
const router = express.Router();

//Traes todas las categorias

router.get('/', (req, res, next) => {
    try {
      const {size} = req.query;
      const category = service.find(size || 10);
      res.json({
        'success': true,
        'message': 'Se han traido todas las categorias',
        'Data': category
      });
    } catch (error) {
      next(error);
    }
});

router.post('/', validatorHandler(createCategoryDto, 'body'), (req, res, next) => {
    try {
      const body = req.body;
      const category = service.create(body);
      res.json({
       'success': true,
       'message': 'Se ha agregado la categoria',
       'Data': category
      });
    } catch (error) {
      next(error);
    }
});

router.get('/:id', validatorHandler(getCategoryId, 'params'), (req, res, next) => {
    try {
      const { id } = req.params;
      const category = service.findOne(id);
      res.json({
       'success': true,
       'message': 'Se encontro la siguiente categoria',
       'Data': category
      });
    } catch (error) {
      next(error);
    }
});

router.patch('/:id', validatorHandler(getCategoryId, 'params'), validatorHandler(updateCategoryDto, 'body'), (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
        'success': true,
        'message': 'Se ha actualizado la categoria',
        'Data': {
          'Original': old,
          'Modificado': changed
        }
      });
    } catch (error) {
      next(error);
    }
});

router.delete('/:id', validatorHandler(getCategoryId, 'params') ,(req, res, next) => {
    try {
      const { id } = req.params;
      const category = service.delete(id);
      res.json({
        'success': true,
        'message': 'Se ha eliminado la siguiente categoria',
        'Data': category
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
