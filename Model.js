const fs = require('fs');
const path = require('path');

class QuizModel {
  constructor() {
    this.questions = [];
    this.pregunt = this.loadQuestions();
  }

  loadQuestions() {
    const jsonPath = path.join(__dirname, 'questions.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    this.questions = JSON.parse(jsonData);
    return this.OrderQuestions(this.questions);
  }

  OrderQuestions(jsonObject) {
    //Se convierte el objeto JSON en un String
    let questions = JSON.stringify(jsonObject, null);
    //Se buscan las expresiones regulares '},','],' y se le añade un salto de linea para no tener problemas en la estructura HTML.
    questions = questions.replace(/"},/g, '"},\n').replace(/"},"/g, '"},\n').replace(/"]," /g, '"],\n');
    return questions;
  }
}

module.exports = QuizModel;