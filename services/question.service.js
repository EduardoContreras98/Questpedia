const faker = require('faker');
const boom = require('@hapi/boom');

class QuestionService{
  constructor(){
    this.questions = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.questions.push({
        id: faker.datatype.uuid(),
        title: faker.name.findName(),
        comment: faker.name.findName(),
        user: faker.internet.userName(),
        category: faker.name.findName(),
        date: faker.date.past(2)
      });
    }
  }

  find(size){
    const questions = this.questions.filter((item, index) => item && index < size);
    if(!questions)
      throw boom.notFound('No se encontro la pregunta solicitada');
    else if(questions.length <= 0)
      throw boom.notFound('No hay preguntas registradas todavia');
    return questions;
  }

  create(data){
    const newQuestion = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.questions.push(newQuestion);
    return newQuestion;
  }

  findOne(id){
    const question = this.questions.find((item) => item.id === id)
    if(!question)
      throw boom.notFound('La pregunta no pudo ser encontrada');
    return question;
  }

  update(id, changes){
    const index = this.questions.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('La pregunta no pudo ser encontrada');
    var currentQuestion = this.questions[index];
    this.questions[index] = {
      ...currentQuestion,
      ...changes
    };
    return {
      old: currentQuestion,
      changed: this.questions[index]
    };
  }

  delete(id){
    const index = this.questions.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('La pregunta no pudo ser encontrada');
    var currentQuestion = this.questions[index];
    this.questions.splice(index, 1);
    return currentQuestion;
  }
}

module.exports = QuestionService;
