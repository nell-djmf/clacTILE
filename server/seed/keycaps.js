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
    },
    {
      name: 'DSA Dark Magic Girl',
      profile: 'DSA',
      material: 'PBT',
      lettering: 'Lettered',
      color: 'Black, Purple',
    },
    {
      name: 'GMK Laser',
      profile: 'Cherry',
      material: 'ABS',
      lettering: 'Lettered',
      color: 'Cyan, Purple, Green',
    },
    {
      name: 'JTK Zen',
      profile: 'Cherry',
      material: 'ABS',
      lettering: 'Lettered', 
      color: 'Black, White, Green',
    },
    {
      name: 'HyperX Pudding',
      profile: 'OEM',
      material: 'PBT',
      lettering: 'Lettered', 
      color: 'Black',
    },
    {
      name: 'GMK Momo Yume',
      profile: 'Cherry',
      material: 'ABS',
      lettering: 'Lettered', 
      color: 'White, Grey, Pink',
    },
    {
      name: 'ePBT Scandi',
      profile: 'Cherry',
      material: 'PBT',
      lettering: 'Lettered', 
      color: 'White, Grey, Yellow, Blue',
    },
    {
      name: 'YMDK Greyscale',
      profile: 'OEM',
      material: 'PBT',
      lettering: 'Blank', 
      color: 'White, Grey, Black',
    },
    {
      name: 'YMDK 9009 Retro',
      profile: 'DSA',
      material: 'PBT',
      lettering: 'Blank', 
      color: 'Cream, Grey, Pink, Green',
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