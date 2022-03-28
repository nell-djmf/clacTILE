const db = require('../db')
const { User, List } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rockforceList = await List.find({ name: 'Ergo Life' })
  const casterList = await List.find({ name: 'Dream Boards' })

  const users = [
    {
        name: 'Rockforce80',
        list_id: rockforceList[0]._id
    },

    {
        name: 'caster_class',
        list_id: casterList[0]._id
    }

  ]

  await User.insertMany(users)
  console.log('Created users!')
}
const run = async () => {
  await main()
  db.close()
}

run()