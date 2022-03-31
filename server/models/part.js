const { Schema } = require('mongoose')

const Part = new Schema(
  {
    name: { type: String, required: true },
    item: { type: String, required: true },
    color: { type: String, require: true },
    id: { type: String, required: true }
},
  { timestamps: true }
)

Part.index({'$**': 'text'})

module.exports = Part