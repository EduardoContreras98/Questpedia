const faker = require('faker');
const boom = require('@hapi/boom');

class CategoryService{
  constructor(){
    this.categorys = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categorys.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName()
      });
    }
  }

  find(size){
    const categorys = this.categorys.filter((item, index) => item && index < size);
    if(!categorys)
      throw boom.notFound('No se encontro la categoria solicitada');
    else if(categorys.length <= 0)
      throw boom.notFound('No hay categorias registradas todavia');
    return categorys;
  }

  create(data){
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categorys.push(newCategory);
    return newCategory;
  }

  findOne(id){
    const category = this.categorys.find((item) => item.id === id)
    if(!category)
      throw boom.notFound('Categoria no encontrada');
    return category;
  }

  update(id, changes){
    const index = this.categorys.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('La categoria no fue encontrada');
    var currentCategory = this.categorys[index];
    this.categorys[index] = {
      ...currentCategory,
      ...changes
    };
    return {
      old: currentCategory,
      changed: this.categorys[index]
    };
  }

  delete(id){
    const index = this.categorys.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('La categoria no fue encontrada');
    var currentCategory = this.categorys[index];
    this.categorys.splice(index, 1);
    return currentCategory;
  }
}

module.exports = CategoryService;
