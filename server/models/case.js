const { Schema } = require('mongoose')

const Case = new Schema(
  {
    name: { type: String, required: true },
    layout: { type: String, required: true },
    material: { type: String, required: true },
    color: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Case