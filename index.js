const express = require('express'); 
const session = require('express-session');
const express_ejs_layouts=require('express-ejs-layouts');
const tarefaController = require('./controllers/tarefaController');
const usuarioController = require('./controllers/usuarioController'); 
const app = express(); 
const port = 3000; 
const Database = require('./models/database');

app.use(session({secret: 'l1nd4c4ch3ad4'}));

app.use((req,res, next) =>{
    if(!req.session.user){
        if(req.originalUrl == '/login' || req.originalUrl == '/autenticar'){
            next()
        }else{
            res.redirect('login')
        }
    }else{
        next()
    }
})

app.set('view engine', 'ejs'); 
app.get('/', (req,res)=>{
    
    res.render('home')
    
})

app.use(express_ejs_layouts);
app.set('layout','./layouts/default/index.ejs');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

//rotas 
app.get('/tarefas', tarefaController.getTarefas); 
app.post('/tarefas', tarefaController.addTarefa);
app.delete('/tarefa',tarefaController.addTarefa); 
app.put('/tarefa',tarefaController.addTarefa); 
app.get('/tarefa',tarefaController.addTarefa);
app.get('/login',(req,res)=>{
    app.set('layout','./layouts/default/login');
    usuarioController.login(req,res);
})
app.post('/login',(req,res)=>{
    usuarioController.autenticar(req,res);
})


app.listen(port, () => { 
    console.log(`Servidor rodando em http://localhost:${port}`);
});
app.use(express.static('PUBLIC'));