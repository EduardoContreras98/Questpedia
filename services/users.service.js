const faker = require('faker');
// eslint-disable-next-line no-unused-vars
const boom = require('@hapi/boom');

class UserService{
  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        userName: faker.internet.userName(),
        password: faker.internet.password(),
        age: faker.datatype.number({
          'min': 18,
          'max': 50
        })
      });
    }
  }

  find(size){
    const users = this.users.filter((item, index) => item && index < size);
    if(!users)
      throw boom.notFound('No se encontro el usuario solicitado');
    else if(users.length <= 0)
      throw boom.notFound('No hay usuarios registrados todavia')
    return users
  }

  create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  findOne(id){
    const user = this.users.find((item) => item.id === id)
    if(!user)
      throw boom.notFound('Usuario no encontrado');
    return user;
  }

  update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('El usuario no fue encontrado');
    var currentUser = this.users[index];
    this.users[index] = {
      ...currentUser,
      ...changes
    };
    return {
      old: currentUser,
      changed: this.users[index]
    };
  }

  delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('El usuario no fue encontrado');
    var currentUser = this.users[index];
    this.users.splice(index, 1);
    return currentUser;
  }
}

module.exports = UserService;
