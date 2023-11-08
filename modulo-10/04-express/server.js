require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('conetctei')
    app.emit('pronto')
  })
  .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')

const {middlewareGlobal} = require('./src/middlewares/middleware')
const porta = 3040 

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'qwert',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})
app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
  app.listen(porta, () => console.log(`servidor executando na porta ${porta}`))
})