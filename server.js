const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./server/db')
const { User, Build, Case, Switch, Keycap } = require('./server/models')
const app = express()


//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))



//ROUTES
app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
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

app.get('/builds', async (req, res) => {
  const builds = await Build.find({ user_id: "62438405a6d0c46a33b546d8" }).populate({
    path: 'case_id keycap_id switch_id',
  })
  res.json(builds)
})

app.post('/builds/create', async (req, res) => {
  const newBuild = Build.create({
    name: req.body.name,
    user_id: "62438405a6d0c46a33b546d8",
    case_id: req.body.case_id,
    keycap_id: req.body.keycap_id,
    switch_id: req.body.switch_id
  }, req.body)
  res.json(newBuild)
})

// app.post('/new', async (req, res) => {
//   const updateNew = Build.findOneAndUpdate
//   ({ $text: { $search: "placeholder" }}, { new: true })
//   res.json(updateNew)
// })


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})