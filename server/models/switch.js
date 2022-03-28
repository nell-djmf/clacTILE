const { Schema } = require('mongoose')

const Switch = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    actuation: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Switch