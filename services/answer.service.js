const faker = require('faker');
const boom = require('@hapi/boom');

class AnswerService{
  constructor(){
    this.answers = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.answers.push({
        id: faker.datatype.uuid(),
        question: faker.datatype.uuid(),
        answer: faker.name.findName(),
        user: faker.internet.userName(),
        date: faker.date.past(2),
        check: false,
        votes_p: faker.datatype.number(),
        votes_n: faker.datatype.number()
      });
    }
  }

  find(size){
    const answers = this.answers.filter((item, index) => item && index < size);
    if(!answers)
      throw boom.notFound('No se encontro la respuesta solicitada');
    else if(answers.length <= 0)
      throw boom.notFound('No hay respuestas registradas todavia');
    return answers;
  }

  create(data){
    const newAnswer = {
      id: faker.datatype.uuid(),
      question: faker.datatype.uuid(),
      ...data
    }
    this.answers.push(newAnswer);
    return newAnswer;
  }

  findOne(id){
    const answer = this.answers.find((item) => item.id === id)
    if(!answer)
      throw boom.notFound('La respuesta no pudo ser encontrada');
    return answer;
  }

  delete(id){
    const index = this.answers.findIndex(item => item.id === id);
    if(index === -1)
      throw boom.notFound('La respuesta no pudo ser encontrada');
    var currentAnswer = this.answers[index];
    this.answers.splice(index, 1);
    return currentAnswer;
  }
}

module.exports = AnswerService;
