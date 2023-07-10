const express = require('express'); 
const tarefaController = require('./controllers/tarefaController'); 
const app = express(); 
const port = 3000; 
const Database = require('./models/database');
app.set('view engine', 'ejs'); 
app.get('/', (req, res)=>{
    res.send("<h1>Tarefas</h1>");
    Database.connect();
    let tarefas = Database.query('SELECT * FROM tarefas');
    console.log(tarefas);
});
app.use(express.urlencoded({ extended: true })); 
app.get('/tarefas', tarefaController.getTarefas); 
app.post('/tarefa', tarefaController.addTarefa);
app.delete('/tarefa',tarefaController.addTarefa); 
app.put('/tarefa',tarefaController.addTarefa); 
app.get('/tarefa',tarefaController.addTarefa); 
app.listen(port, () => { 
    console.log(`Servidor rodando em http://localhost:${port}`);
});