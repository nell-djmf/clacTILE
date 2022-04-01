const db = require('../db')
const { Switch } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const switches = [
    {
      name: 'CherryMX Red',
      type: 'Linear',
      actuation: '45g',
      color: 'Red',
      image: 'https://i.imgur.com/xOqQMBD.jpg'
    },
    {
      name: 'Gateron Yellow',
      type: 'Linear',
      actuation: '50g',
      color: 'Yellow',
      image: 'https://i.imgur.com/svPcE4v.jpg'
    },
    {
      name: 'Zeal Tealios V2',
      type: 'Linear',
      actuation: '67g',
      color: 'Teal',
      image: 'https://i.imgur.com/YRL0Dft.jpg'
    },
    {
      name: 'CherryMX Brown',
      type: 'Tactile',
      actuation: '55g',
      color: 'Brown',
      image: 'https://i.imgur.com/hSNU0Tt.jpg'
    },
    {
      name: 'Glorious Panda',
      type: 'Tactile',
      actuation: '67g',
      color: 'Orange',
      image: 'https://i.imgur.com/1v2Xxts.jpg'
    },
    {
      name: 'Halo Clear',
      type: 'Tactile',
      actuation: '65g',
      color: 'White',
      image: 'https://i.imgur.com/d7KQsLg.jpg'
    },
    {
      name: 'CherryMX Blue',
      type: 'Clicky',
      actuation: '60g',
      color: 'Blue',
      image: 'https://i.imgur.com/xmuRyip.jpg'
    },
    {
      name: 'Kailh BOX Jade',
      type: 'Clicky',
      actuation: '50g',
      color: 'Green',
      image: 'https://i.imgur.com/EjgYS8j.jpg'
    },
    {
      name: 'NovelKeys x Kailh Sherbet',
      type: 'Clicky',
      actuation: '45g',
      color: 'Orange',
      image: 'https://i.imgur.com/Nrmcf95.jpg'
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