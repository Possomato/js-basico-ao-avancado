const HomeModel = require('../models/homemodel.js')

HomeModel.create({
  titulo: 'Um título bem legalzinho',
  descricao: 'Uma descrição de teste'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaHome = (request, response) => {
  response.render('index')
}

exports.postHome = (req, res) => {
  res.send(req.body)
}