const { Schema } = require('mongoose')

const Keycap = new Schema(
  {
    name: { type: String, required: true },
    profile: { type: String, required: true },
    material: { type: String, required: true },
    lettering: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)


Keycap.index({'$**': 'text'})

module.exports = Keycap