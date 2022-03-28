const { Schema } = require('mongoose')

const List = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user_id' },
    build_id: { type: Schema.Types.ObjectId, ref: 'build_id' }
},
  { timestamps: true }
)


module.exports = List