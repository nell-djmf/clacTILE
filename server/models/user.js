const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)


module.exports = User