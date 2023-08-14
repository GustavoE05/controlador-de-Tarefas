const Tarefa = require('../models/tarefaModel');
let tarefas = [];
async function getTarefas(req, res){
    tarefas = await Tarefa.listarTarefas();
    res.render('tarefas', {tarefas});
}
function addTarefa(req, res){
    const {title} = req.body;

    const tarefa = new Tarefa(null, title, null);
    tarefa.salvar();
    res.redirect('/tarefas');
}
module.exports = {getTarefas, addTarefa};