const db = require('../db')
const { DataTypes } = require('sequelize')

const Contato = db.db.define('Contato', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING

    },
    telefone:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    link_foto: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
    {
        tableName: 'contatos',
    }
)

module.exports = Contato