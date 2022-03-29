const { Schema } = require('mongoose')

const Build = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    list_id: { type: Schema.Types.ObjectId, ref: 'lists' },
    case_id: { type: Schema.Types.ObjectId, ref: 'cases' },
    keycap_id: { type: Schema.Types.ObjectId, ref: 'keycaps' },
    switch_id: { type: Schema.Types.ObjectId, ref: 'switches' }
},
  { timestamps: true }
)


module.exports = Build