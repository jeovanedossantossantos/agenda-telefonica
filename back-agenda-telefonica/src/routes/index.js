const express = require('express')
const routes = express.Router();


const controllerContato = require('../controller/controllerContato')
routes.post("/cadastra_contato",controllerContato.cadastrar)
routes.delete("/:id",controllerContato.deletar)
routes.get("/listar_contatos", controllerContato.listartTodos)
routes.put("/atualizar/:id",controllerContato.atualizar)
module.exports = routes;