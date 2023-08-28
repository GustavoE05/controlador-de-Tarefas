const usuarioModel = require('../models/usuarioModel')
let usuarios = [];

    function login(req, res){
    res.render('login');
}
 async function autenticar(req, res){
    console.log(req.body)
    if(req.body.email && req.body.senha){
       let resp = await usuarioModel.autenticar(req.body.email, req.body.senha)
       console.log(resp);
        if(resp.length > 0){
            //usuarioligado
            req.session.user={
                id_usuario: resp[0].id_usuario,
                nome: resp[0].nome,
                email: resp[0].email
            }

            res.redirect('/tarefas')
            
        }else{
            //usuario invalido
            res.redirect('/login');
        }
    }
    //res.render('login')
    //res.redirect('./login')
}

async function logout(req, res){
    delete req.session.user
    res.redirect('/')
}

module.exports = {login, autenticar, logout}