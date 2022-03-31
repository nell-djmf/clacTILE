const { Schema } = require('mongoose')

const Switch = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    actuation: { type: String, required: true },
    color: { type: String, required: true }
  },
  { timestamps: true }
)


Switch.index({'$**': 'text'})

module.exports = Switch