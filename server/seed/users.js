const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const users = [
    {
        name: 'Rockforce80',
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