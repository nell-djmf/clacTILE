const db = require('../db')
const { Part } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parts = [
    {
      name: 'KBDFans Mountain Ergo',
      item: 'case',
      color: 'Black',
      id: "62420467ddfffed4543e58be"
    },
    {
      name: 'Kyria',
      item: 'case',
      color: 'White',
      id: "62420467ddfffed4543e58bf"
    },
    {
      name: 'Lily58',
      item: 'case',
      color: 'Clear',
      id: "62420467ddfffed4543e58c0"
    },
    {
      name: 'AKKO Sakura 87',
      item: 'case',
      color: 'Pink',
      id: "62420467ddfffed4543e58c1"
    },
    {
      name: 'KBD8X Mark II',
      item: 'case',
      color: 'Black',
      id: "62420467ddfffed4543e58c2"
    },
    {
      name: 'EPOMAKER K870T',
      item: 'case',
      color: 'White',
      id: "62420467ddfffed4543e58c3"
    },
    {
      name: 'Blade60',
      item: 'case',
      color: 'Black',
      id: "62420467ddfffed4543e58c4"
    },
    {
      name: 'Zen',
      item: 'case',
      color: 'Brown',
      id: "62420467ddfffed4543e58c5"
    },
    {
      name: 'D60Lite',
      item: 'case',
      color: 'Purple',
      id: "62420467ddfffed4543e58c6"
    },
    {
      name: 'YMDK CNC Acrylic Diamond',
      item: 'case',
      color: 'Clear',
      id: "62420467ddfffed4543e58c7"
    },

    {
      name: 'DSA Milkshake',
      item: 'keycap',
      color: 'White, Pastel',
      id: "6242046fed3c4394766749db"
    },
    {
      name: 'DSA Dark Magic Girl',
      item: 'keycap',
      color: 'Black, Purple',
      id: "6242046fed3c4394766749dc"
    },
    {
      name: 'GMK Laser',
      item: 'keycap',
      color: 'Cyan, Purple, Green',
      id: "6242046fed3c4394766749dd"
      
    },
    {
      name: 'JTK Zen',
      item: 'keycap',
      color: 'Black, White, Green',
      id: "6242046fed3c4394766749de"
    },
    {
      name: 'HyperX Pudding',
      item: 'keycap',
      color: 'Black',
      id: "6242046fed3c4394766749df"
    },
    {
      name: 'GMK Momo Yume',
      item: 'keycap',
      color: 'White, Grey, Pink',
      id: "6242046fed3c4394766749e0"
    },
    {
      name: 'ePBT Scandi',
      item: 'keycap',
      color: 'White, Grey, Yellow, Blue',
      id: "6242046fed3c4394766749e1"
    },
    {
      name: 'YMDK Greyscale',
      item: 'keycap',
      color: 'White, Grey, Black',
      id: "6242046fed3c4394766749e2"
    },
    {
      name: 'YMDK 9009 Retro',
      item: 'keycap',
      color: 'Cream, Grey, Pink, Green',
      id: "6242046fed3c4394766749e3"
    },
    {
      name: 'CherryMX Red',
      item: 'switch',
      color: 'Red',
      id: "6242047730aed63e3671eed7"
    },
    {
      name: 'Gateron Yellow',
      item: 'switch',
      color: 'Yellow',
      id: "6242047730aed63e3671eed8"
    },
    {
      name: 'Zeal Tealios V2',
      item: 'switch',
      color: 'Teal',
      id: "6242047730aed63e3671eed9"
    },
    {
      name: 'CherryMX Brown',
      item: 'switch',
      color: 'Brown',
      id: "6242047730aed63e3671eedb"
    },
    {
      name: 'Glorious Panda',
      item: 'switch',
      color: 'Orange',
      id: "6242047730aed63e3671eedc"
    },
    {
      name: 'Halo Clear',
      item: 'switch',
      color: 'White',
      id: "6242047730aed63e3671eedd"
    },
    {
      name: 'CherryMX Blue',
      item: 'switch',
      color: 'Blue',
      id: "6242047730aed63e3671eede"
    },
    {
      name: 'Kailh BOX Jade',
      item: 'switch',
      color: 'Green',
      id: "6242047730aed63e3671eedf"
    },
    {
      name: 'NovelKeys x Kailh Sherbet',
      item: 'switch',
      color: 'Orange',
      id: "6242047730aed63e3671eee0"
    }

  ]

  await Part.insertMany(parts)
  console.log('Created parts!')
}
const run = async () => {
  await main()
  db.close()
}

run()