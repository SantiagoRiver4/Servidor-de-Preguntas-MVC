const plantilla=
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuestionario de Linux DSRI</title>
    <style>
        body {
            background: linear-gradient(to bottom, #ffc66b, #ff9a00);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        #question-container {
            background: linear-gradient(to bottom, #5e493c, #321d14);
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            text-align: center;
            margin: 20px;
        }

        h1 {
            font-style: italic;
            font-size: 24px;
            margin: 0;
        }

        select {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            background-color: #fff;
            color: #333;
            border-radius: 5px;
        }

        #feedback-container {
            background: linear-gradient(to bottom, #fff, #ffe4c4);
            color: #333;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
        }

        p {
            font-size: 18px;
        }

        .image-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            padding: 20px;
            border: 2px solid #5e493c;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        img {
            width: 100%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <h1>CUESTIONARIO DE LINUX</h1>
    <div id="question-container">
        <p id="question-text"></p>
        <select id="options-dropdown">
            <option value="" disabled selected>Selecciona una opción</option>
        </select>
    </div>
    <div id="feedback-container">
        <p id="feedback-text"></p>
    </div>
    <p id="timer"></p>
    <button id="submit-button">Enviar Respuesta</button>
    <p id="score"></p>
    <div class="image-container">
        <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/02/LinuxFoundation_AIM.jpg" alt="Linux Foundation">
    <script>
        const questions = <!-- Los datos de los usuarios se llenarán desde la función de JavaScript -->;

        class Quiz {
          constructor(questions) {
            this.questions = questions;
            this.score = 0;
            this.currentQuestionIndex = 0;
            this.timer = 20; // Tiempo en segundos
          }

          displayCurrentQuestion() {
            const currentQuestion = this.questions[this.currentQuestionIndex];
            document.getElementById("question-text").textContent = currentQuestion.question;
            const optionsDropdown = document.getElementById("options-dropdown");
            optionsDropdown.innerHTML = "";
            currentQuestion.options.forEach((option, index) => {
              const optionElement = document.createElement("option");
              optionElement.value = option;
              optionElement.textContent = option;
              optionsDropdown.appendChild(optionElement);
            });

            this.startTimer();
        }

          checkAnswer() {
            clearInterval(this.timerInterval); // Detener el temporizador al responder
            const currentQuestion = this.questions[this.currentQuestionIndex];
            const selectedOption = document.getElementById("options-dropdown").value.toLowerCase();
            const correctAnswer = currentQuestion.correctAnswer.toLowerCase();

            if (selectedOption === correctAnswer) {
              console.log("¡Respuesta correcta!");
              this.showFeedback("¡Respuesta correcta!");
              this.score++;
            } else {
              console.log("Respuesta incorrecta. La respuesta correcta era: " + currentQuestion.correctAnswer);
              this.showFeedback("Respuesta incorrecta. " + currentQuestion.feedback);
            }

            this.currentQuestionIndex++;

            if (this.currentQuestionIndex < this.questions.length) {
              this.displayCurrentQuestion();
            } else {
              this.displayScore();
            }
          }

          displayScore() {
            document.getElementById("score").textContent = 'Puntuación final: ' + this.score + ' de ' + this.questions.length;
 

          }

          showFeedback(feedbackText) {
            const feedbackContainer = document.getElementById("feedback-container");
            feedbackContainer.textContent = feedbackText;
          }

          start() {
            this.displayCurrentQuestion();
          }

          startTimer() {
            this.timer = 20; // Reiniciar el temporizador
            this.timerInterval = setInterval(() => {
              if (this.timer > 0) {
                document.getElementById("timer").textContent = 'Tiempo restante: $' + this.timer + ' segundos';

                this.timer--;
              } else {
                console.log("¡Tiempo agotado!");
                this.checkAnswer(); // Llama a checkAnswer para indicar que se agotó el tiempo
              }
            }, 1000);
          }
        }

        const quiz = new Quiz(questions);
        quiz.start();

        document.getElementById("submit-button").addEventListener("click", () => {
          quiz.checkAnswer();
        });
    </script>
</body>
</html>`
class SantiRiri {
    constructor (){
        this.plantilla = plantilla;
    }
}
module.exports = SantiRiri;
