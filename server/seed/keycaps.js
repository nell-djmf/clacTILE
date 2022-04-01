const db = require('../db')
const { Keycap } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const keycaps = [
    {
      name: 'DSA Milkshake',
      profile: 'DSA',
      material: 'PBT Dyesub',
      lettering: 'Lettered',
      color: 'White, Pastel',
      image: 'https://i.imgur.com/n5adreS.jpg?1'
    },
    {
      name: 'DSA Dark Magic Girl',
      profile: 'DSA',
      material: 'PBT',
      lettering: 'Lettered',
      color: 'Black, Purple',
      image: 'https://i.imgur.com/qAAE8OK.jpg?1'
    },
    {
      name: 'GMK Laser',
      profile: 'Cherry',
      material: 'ABS',
      lettering: 'Lettered',
      color: 'Cyan, Purple, Green',
      image: 'https://i.imgur.com/JUuwmBj.jpg'
    },
    {
      name: 'JTK Zen',
      profile: 'Cherry',
      material: 'ABS',
      lettering: 'Lettered', 
      color: 'Black, White, Green',
      image: 'https://i.imgur.com/BdDbiCu.jpg?1'
    },
    {
      name: 'HyperX Pudding',
      profile: 'OEM',
      material: 'PBT',
      lettering: 'Lettered', 
      color: 'Black',
      image: 'https://i.imgur.com/jJ8ONc5.jpg?1'
    },
    {
      name: 'GMK Momo Yume',
      profile: 'Cherry',
      material: 'ABS',
      lettering: 'Lettered', 
      color: 'White, Grey, Pink',
      image: 'https://i.imgur.com/nCjWZu5.jpg?1'
    },
    {
      name: 'ePBT Scandi',
      profile: 'Cherry',
      material: 'PBT',
      lettering: 'Lettered', 
      color: 'White, Grey, Yellow, Blue',
      image: 'https://i.imgur.com/fKvE3vq.jpg?1'
    },
    {
      name: 'YMDK Greyscale',
      profile: 'OEM',
      material: 'PBT',
      lettering: 'Blank', 
      color: 'White, Grey, Black',
      image: 'https://i.imgur.com/0La9Jnl.jpg?1'
    },
    {
      name: 'YMDK 9009 Retro',
      profile: 'DSA',
      material: 'PBT',
      lettering: 'Blank', 
      color: 'Cream, Grey, Pink, Green',
      image: 'https://i.imgur.com/2Z5YyHV.jpg?1'
    },

  ]

  await Keycap.insertMany(keycaps)
  console.log('Created keycaps!')
}
const run = async () => {
  await main()
  db.close()
}

run()