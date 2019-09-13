const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const path = require('path')

const app = express()

app.use(morgan('dev'))

// Make sure we can parse JSON request bodies
app.use(bodyParser.json())

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/creatures', require('./api/creatures'))
app.use('/api/parties', require('./api/parties'))
app.use('/api', require('./api'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/creatures', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })
  
  app.get('/parties', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.get('*', (req, res) => {
    res.status(404).send("Page not found!")
  })

  app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })

  module.exports = app
