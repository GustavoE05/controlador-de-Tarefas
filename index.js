const express = require('express'); 
const path = require ('path')
const session = require('express-session');
const express_ejs_layouts=require('express-ejs-layouts');
require('dotenv').config()
const tarefaController = require('./controllers/tarefaController');
const usuarioController = require('./controllers/usuarioController'); 
const app = express(); 
const port = 4000; 
const Database = require('./models/database');

app.use(express.static(path.join(__dirname, 'PUBLIC')));
app.use(session({secret: 'l1nd4c4ch3ad4'}));

app.use((req,res, next) =>{
    console.log("1")
    if(!req.session.user){
        if(req.originalUrl == '/login' || req.originalUrl == '/autenticar'){
            console.log("2")
            app.set('layout','./layouts/default/login');
            res.locals.layoutsVariables = {
            Url : process.env.URL,
            style : "/css/",
            title: "login", 
            user : req.session.usuario
            };
            next()
        }else{
            console.log("3")
            res.redirect('login')
        }
        }else{
            console.log("4")
        app.set('layout', './layouts/default/index');
        res.locals.layoutsVariables = {
            Url : process.env.URL,
            img : "/img/",
            style : "/css/",
            title: "Tarefas",
            user : req.session.usuario
        }
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
    usuarioController.login(req,res);
})

app.get('/logout',(req,res)=>{
    usuarioController.logout(req,res);
})

app.post('/login',(req,res)=>{
    usuarioController.autenticar(req,res);
})

app.get('/tarefa/delete/:id_tarefa', tarefaController.deleteTarefa);


app.listen(port, () => { 
    console.log(`Servidor rodando em http://localhost:${port}`);
});
