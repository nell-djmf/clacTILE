const db = require('../db')
const { Switch } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const switches = [
    {
      name: 'CherryMX Red',
      type: 'Linear',
      actuation: '45g',
      color: 'Red'
    },
    {
      name: 'Gateron Yellow',
      type: 'Linear',
      actuation: '50g',
      color: 'Yellow'
    },
    {
      name: 'Zeal Tealios V2',
      type: 'Linear',
      actuation: '67g',
      color: 'Teal'
    },
    {
      name: 'CherryMX Brown',
      type: 'Tactile',
      actuation: '55g',
      color: 'Brown'
    },
    {
      name: 'CherryMX Brown',
      type: 'Tactile',
      actuation: '55g',
      color: 'Brown'
    },
    {
      name: 'Glorious Panda',
      type: 'Tactile',
      actuation: '67g',
      color: 'Orange'
    },
    {
      name: 'Halo Clear',
      type: 'Tactile',
      actuation: '65g',
      color: 'White'
    },
    {
      name: 'CherryMX Blue',
      type: 'Clicky',
      actuation: '60g',
      color: 'Blue'
    },
    {
      name: 'Kailh BOX Jade',
      type: 'Clicky',
      actuation: '50g',
      color: 'Green'
    },
    {
      name: 'NovelKeys x Kailh Sherbet',
      type: 'Clicky',
      actuation: '45g',
      color: 'Orange'
    },
  ]

  await Switch.insertMany(switches)
  console.log('Created switches!')
}
const run = async () => {
  await main()
  db.close()
}

run()