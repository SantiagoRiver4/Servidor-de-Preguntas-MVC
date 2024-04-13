const http = require('http');
const QuizModel = require('./Model');
const View = require('./view');

const model = new QuizModel();
const view = new View();
let html = "";

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    //Se busca el comentario en la plantilla HTML, y se reemplaza por el JSON en un string organizado con los saltos debidos.
      html = view.plantilla.replace("<!-- Los datos de los usuarios se llenarán desde la función de JavaScript -->", model.pregunt); 
      //Se envia la plantilla completa al explorador.
      res.end(html)
  }
  });

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});