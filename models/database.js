const mysql = require('mysql2/promise');
    
    async function connect(){
        try{
            const conexao = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'tarefas_database',
            });
            console.log("funcionou");
            return conexao;
        }catch(error){
            console.log("xiiii: ", error);
            throw error;
        }
    }
    
    async function query(sql){
        const conexao = await connect();
        try{
            const [rows] = await conexao.execute(sql);
            console.log(rows);
            console.log("query executada");

            return rows;
        }catch(error){
            console.log("erro ao executar query: ",error);
            throw error;
        }finally{
            if(conexao){
                conexao.end();
                console.log("conexao encerrada");
            }
        }
    }
module.exports = {query};
