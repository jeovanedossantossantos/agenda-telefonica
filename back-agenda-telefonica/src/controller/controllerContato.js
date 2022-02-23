const {Contato} = require('../models')

const controllerContato = {
    async cadastrar(req, res) {
      
        console.log("Cadastro")
        
        const {nome, email, telefone} = req.body;
     

        res.send()
        const newContato= await Contato.create({

            nome, email, telefone
        });

        return res.status(201).json(newContato)
    },
    async listartTodos(req, res) {
        const listar = await Contato.findAll()

        return res.status(200).json(listar)
    },
    async atualizar(req, res) {

        const {id}=req.params
        const {nome, email, telefone} = req.body;

        if(!id) return res.status(400).json({"message": "Ida não valido"})

        const contatoAtualizado = await Contato.update({
            nome, email, telefone
        },
        {
            where: {
                id,
            }
        })
        res.json({"message":"Contato atualizado"})

    },
    async deletar(req, res) {
        console.log("deletar")

        try{
            const {id} = req.params
            await Contato.destroy({
                where: {id}
            })
            return res.status(204).json({"message": "Excluido com sucesso"})
        }catch(err){
            return res.status(500).json({"message":"Ocorreu algum problema"})
        }
       

    }

}

module.exports = controllerContato