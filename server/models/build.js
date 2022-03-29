const { Schema } = require('mongoose')

const Build = new Schema(
  {
    name: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    case_id: { type: Schema.Types.ObjectId, ref: 'cases' },
    keycap_id: { type: Schema.Types.ObjectId, ref: 'keycaps' },
    switch_id: { type: Schema.Types.ObjectId, ref: 'switches' }
},
  { timestamps: true }
)


module.exports = Build