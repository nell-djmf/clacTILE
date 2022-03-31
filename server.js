const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./server/db')
const { User, Build, Case, Switch, Keycap, Part } = require('./server/models')
const res = require('express/lib/response')
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

app.get('/parts', async (req, res) => {
  const parts = await Part.find()
  res.json(parts)
})



app.post('/builds/create', async (req, res) => {
  const newBuild = await Build.create({
    name: req.body.name,
    user_id: "62438405a6d0c46a33b546d8",
    case_id: req.body.case_id,
    keycap_id: req.body.keycap_id,
    switch_id: req.body.switch_id
  })
  res.json(newBuild)
})

app.post('/update/:target', async (req, res) => {
  let target = req.params.target
  console.log(req.body)
  const updateBuild = await Build.findOneAndUpdate(
    {_id: target}, 
    { $set:
      {
        name: req.body.name,
        case_id: req.body.case_id,
        keycap_id: req.body.keycap_id,
        switch_id: req.body.switch_id
      }
    }, 
    { new: true })
    res.status(200).json(updateBuild)
  })
  
app.delete('/delete', async (req, res) => {
  console.log(req.body)
  const deleteBuild = await Build.findByIdAndDelete(req.body.target)
  console.log(deleteBuild)
  res.status(200).json('deleted successfully!')
})
  
app.get('/preview', async (req, res) => {
  console.log(req.body)
  const findItems = await Part.find({ $or:[ { id: req.body.case }, { id: req.body.keycap }, { id: req.body.switch } ] })
  res.json(findItems)
})


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})