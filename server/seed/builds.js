const db = require('../db')
const { Build, User, Case, Switch, Keycap } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const userRock = await User.find({ name: 'Rockforce80' })
  const crystalCase = await Case.find({ name: 'YMDK CNC Acrylic Diamond'})
  const crystalKeycap = await Keycap.find({ name: 'DSA Milkshake'})
  const crystalSwitch = await Switch.find({ name: 'Halo Clear' })



  const builds = [
    {
      name: 'Crystal',
      user_id: userRock[0]._id,
      case_id: crystalCase[0]._id,
      keycap_id: crystalKeycap[0]._id,
      switch_id: crystalSwitch[0]._id,
    }

  ]

  await Build.insertMany(builds)
  console.log('Created builds!')
}
const run = async () => {
  await main()
  db.close()
}

run()