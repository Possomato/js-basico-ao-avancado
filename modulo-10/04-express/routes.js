const express = require('express')
const route = express.Router()

// importação home
const homeController = require('./src/controllers/homeController')
const {paginaHome,postHome} = homeController

//importação contato
const contatoController = require('./src/controllers/contatoController')
const {paginaContato} = contatoController


//rotas home
route.get('/', paginaHome)
route.post('/', postHome)

//rotas contato
route.get('/contato', paginaContato)

module.exports = route