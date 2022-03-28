const db = require('../db')
const { Case } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cases = [
    {
      name: 'KBDFans Mountain Ergo',
      layout: 'Split',
      material: 'Aluminum',
      color: 'Black',
    },
    {
      name: 'Kyria',
      layout: 'Split',
      material: 'Acrylic',
      color: 'White',
    },
    {
      name: 'Lily58',
      layout: 'Split',
      material: 'Acrylic',
      color: 'Clear',
    },
    {
      name: 'AKKO Sakura 87',
      layout: 'TKL',
      material: 'Acrylic',
      color: 'Pink',
    },
    {
      name: 'KBD8X Mark II',
      layout: 'TKL',
      material: 'Plastic',
      color: 'Black',
    },
    {
      name: 'EPOMAKER K870T',
      layout: 'TKL',
      material: 'Plastic',
      color: 'White',
    },
    {
      name: 'Blade60',
      layout: '60%',
      material: 'Aluminum',
      color: 'Black',
    },
    {
      name: 'Zen',
      layout: '60%',
      material: 'Bamboo',
      color: 'Brown',
    },
    {
      name: 'D60Lite',
      layout: '60%',
      material: 'Acrylic',
      color: 'Purple',
    },
    {
      name: 'YMDK CNC Acrylic Diamond',
      layout: '60%',
      material: 'Acrylic',
      color: 'Clear',
    },

  ]

  await Case.insertMany(cases)
  console.log('Created cases!')
}
const run = async () => {
  await main()
  db.close()
}

run()