const express = require('express');
const UserService = require('../services/user.service');
const service = new UserService;
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserDto, updateUserDto, getUserId } = require('../dtos/users.dto');
const router = express.Router();

//Traer todos los usuarios
router.get('/', (req, res, next) =>{
  try {
    const {size} = req.query;
    const users = service.find(size || 10);
    res.json({
      'Success': true,
      'Message': 'Estos son todos los usuarios encontrados',
      'Data': users
    });
  } catch (error) {
    next(error);
  }
});

//Crear un nuevo usuario
router.post('/', validatorHandler(createUserDto, 'body'), (req, res, next) => {
    try {
      const body = req.body;
      const user = service.create(body);
      res.json({
        'success': true,
        'message': 'El usuario se ha registrado correctamente',
        'Data': user
    });
    } catch (error) {
      next(error);
    }
});

//Buscar un usuario por Id
router.get('/:id', validatorHandler(getUserId, 'params'), (req, res, next) => {
    try {
      const { id } = req.params;
      const user = service.findOne(id);
      res.json({
        'success': true,
        'message': 'Se encontro el registro',
        'Data': user
    });
    } catch (error) {
      next(error);
    }
});

router.patch('/:id', validatorHandler(getUserId, 'params'), validatorHandler(updateUserDto, 'body'),(req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const {old, changed } = service.update(id, body)
        res.json({
          'success': true,
          'message': 'Se ha actualizado el siguiente registro',
          'Data': {
            'Original': old,
            'Modificado': changed
          }
      });
    } catch (error) {
      next(error);
    }
});

router.delete('/:id', validatorHandler(getUserId, 'params'), (req, res, next) => {
    try {
        const { id } = req.params;
        const user = service.delete(id);
        res.json({
          'success': true,
          'message': 'El siguiente usuario se ha eliminado',
          'Data': user
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
