class Tarefa{
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
    static listarTarefas(){
        const db = require('./database');
        let tarefas = db.query("SELECT * FROM tarefas");
        return tarefas;
    }
    salvar(){
        const db = require('./database');
        let resp = db.query(`INSERT INTO tarefas (title) VALUES ('${this.title}')`);
        console.log(resp);
    }
    static async deleteTarefa(id_tarefa){
        const Database = require('./database');
        if(await Database.query("DELETE FROM tarefas WHERE id="+id_tarefa)){
            return true;
        }else{
            return false;
        }
    }
}   

module.exports = Tarefa;
