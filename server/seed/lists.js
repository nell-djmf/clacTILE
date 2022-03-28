const db = require('../db')
const { List, User, Build } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const userCaster = await User.find({ name: 'caster_class' })
  const userRockforce = await User.find({ name: 'Rockforce80' })
  const rockforceBuild = await Build.find({ name: 'Blackout' })
  const casterBuild = await Build.find({ name: 'Crystal' })


  const lists = [
    {
      name: 'Ergo Life',
      user_id: userRockforce[0]._id,
      builds: rockforceBuild[0]._id
    },
    {
      name: 'Dream Boards',
      user_id: userCaster[0]._id,
      builds: casterBuild[0]._id
    }

  ]

  await List.insertMany(lists)
  console.log('Created lists!')
}
const run = async () => {
  await main()
  db.close()
}

run()