const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    list: { type: Schema.Types.ObjectId, ref: 'list_id' }
  },
  { timestamps: true }
)


module.exports = User