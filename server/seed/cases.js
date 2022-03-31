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
      image: 'https://i.imgur.com/2Mce1sD.jpg?1'
    },
    {
      name: 'Kyria',
      layout: 'Split',
      material: 'Acrylic',
      color: 'White',
      image: 'https://i.imgur.com/7KBgqUl.jpg?1'
    },
    {
      name: 'Lily58',
      layout: 'Split',
      material: 'Acrylic',
      color: 'Clear',
      image: 'https://i.imgur.com/Akgt7C6.jpg?1'
    },
    {
      name: 'AKKO Sakura 87',
      layout: 'TKL',
      material: 'Acrylic',
      color: 'Pink',
      image: 'https://i.imgur.com/i6yZAMT.jpg?1'
    },
    {
      name: 'KBD8X Mark II',
      layout: 'TKL',
      material: 'Plastic',
      color: 'Black',
      image: 'https://i.imgur.com/Vapk9nN.jpg'
    },
    {
      name: 'EPOMAKER K870T',
      layout: 'TKL',
      material: 'Plastic',
      color: 'White',
      image: 'https://i.imgur.com/aNvrVKN.jpg?1'
    },
    {
      name: 'Blade60',
      layout: '60%',
      material: 'Aluminum',
      color: 'Black',
      image: 'https://i.imgur.com/kN9HN1J.jpg?1'
    },
    {
      name: 'Zen',
      layout: '60%',
      material: 'Bamboo',
      color: 'Brown',
      image: 'https://i.imgur.com/vSoaGl8.jpg?1'
    },
    {
      name: 'D60Lite',
      layout: '60%',
      material: 'Acrylic',
      color: 'Purple',
      image: 'https://i.imgur.com/g921l1x.jpg?1'
    },
    {
      name: 'YMDK CNC Acrylic Diamond',
      layout: '60%',
      material: 'Acrylic',
      color: 'Clear',
      image: 'https://i.imgur.com/vT8e42S.jpg?1'
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