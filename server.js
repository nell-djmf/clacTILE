const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./server/db')
const { User, List, Build, Case, Switch, Keycap } = require('./server/models')
const app = express()


//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger('dev'))



//ROUTES
app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

app.get('/lists', async (req, res) => {
  const lists = await List.find()
  res.json(lists)
})

app.get('/builds', async (req, res) => {
  const builds = await Build.find()
  res.json(builds)
})

app.get('/cases', async (req, res) => {
  const cases = await Case.find()
  res.json(cases)
})

app.get('/keycaps', async (req, res) => {
  const keycaps = await Keycap.find()
  res.json(keycaps)
})

app.get('/switches', async (req, res) => {
  const switches = await Switch.find()
  res.json(switches)
})



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})