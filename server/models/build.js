const { Schema } = require('mongoose')

const Build = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user_id' },
    list_id: { type: Schema.Types.ObjectId, ref: 'list_id' },
    case_id: { type: Schema.Types.ObjectId, ref: 'case_id' },
    keycap_id: { type: Schema.Types.ObjectId, ref: 'keycap_id' },
    switch_id: { type: Schema.Types.ObjectId, ref: 'switch_id' }
},
  { timestamps: true }
)


module.exports = Build