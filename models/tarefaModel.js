class Tarefa { 
    constructor(id, title, description) { 
    this.id = id; 
    this.title = title; 
    this.description = description; 
    } 

    listarTarefas(){
        const db = require('./database')
        let tarefas = db.query('SELECT * FROM tarefas')
        return tarefas;
    }
    } 
    module.exports = Tarefa;
  