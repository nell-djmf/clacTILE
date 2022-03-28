const db = require('../db')
const { Build, User, List, Case, Switch, Keycap } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const userRockforce = await User.find({ name: 'Rockforce80' })
  const rockforceList = await List.find({ name: 'Ergo Life' })
  const blackoutCase = await Case.find({ name: 'KBDFans Mountain Ergo'})
  const blackoutKeycap = await Keycap.find({ name: 'HyperX Pudding'})
  const blackoutSwitch = await Switch.find({ name: 'CherryMX Blue' })

  const userCaster = await User.find({ name: 'caster_class' })
  const casterList = await List.find({ name: 'Dream Boards' })
  const crystalCase = await Case.find({ name: 'YMDK CNC Acrylic Diamond'})
  const crystalKeycap = await Keycap.find({ name: 'DSA Milkshake'})
  const crystalSwitch = await Switch.find({ name: 'Halo Clear' })



  const builds = [
    {
      name: 'Blackout',
      user_id: userRockforce[0]._id,
      list_id: rockforceList[0]._id,
      case_id: blackoutCase[0]._id,
      keycap_id: blackoutKeycap[0]._id,
      switch_id: blackoutSwitch[0]._id,
    },
    {
      name: 'Crystal',
      user_id: userCaster[0]._id,
      list_id: casterList[0]._id,
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