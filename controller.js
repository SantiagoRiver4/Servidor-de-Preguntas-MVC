class QuizController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.timer = 20;
  }
}

module.exports = QuizController;