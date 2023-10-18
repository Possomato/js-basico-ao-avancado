import axios from 'axios'

function pegaRepositorio(name){
  axios.get(`https://api.github.com/repos/${name}`)
}

pegaRepositorio('facebook/react')