const express = require('express'); 
const tarefaController = require('./controllers/tarefaController'); 
const req = require('express/lib/request');
const app = express(); 
const port = 3000; 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true })); 
//Rotas
app.get('/',(req, res) =>{res.send("<H1>Tarefas<H1>")})
app.get('/tarefas', tarefaController.getTarefas); 
app.post('/tarefas', tarefaController.addTarefa);

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});
