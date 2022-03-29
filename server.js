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
app.use(express.static(`${__dirname}/client/build`))



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

app.get('/lists/Rockforce80', async (req, res) => {
  const rockforceList = await List.find({ user_id: "6242058b2892d64c5e35b359" })
  res.json(rockforceList)
})

app.get('/lists/caster_class', async (req, res) => {
  const casterList = await List.find({ user_id: "6242058b2892d64c5e35b35a" })
  res.json(casterList)
})

app.get('/users/Rockforce80', async (req, res) => {
  const rbuilds = await Build.find({ list_id: "6242077933fca125db484259" }).populate({
    path: 'case_id keycap_id switch_id',
  })
  res.json(rbuilds)
})

app.get('/users/caster_class', async (req, res) => {
  const cbuilds = await Build.find({ list_id: "6242077933fca125db48425a" }).populate({
    path: 'case_id keycap_id switch_id',
  })
  res.json(cbuilds)
})

// app.post('/users/Rockforce80/create/:buildname', async (req, res) => {
//   let namePlaceholder = req.params.buildname
//   const newBuild = Build.create({
//     name: namePlaceholder,
//     user_id: "6242058b2892d64c5e35b359",
//     list_id: "6242077933fca125db484259",
//     case_id: 'empty',
//     keycap_id: 'empty',
    
//   })
//   res.json(newBuild)
// })


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})