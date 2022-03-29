const mongoose = require('mongoose')
const UserSchema = require('./User')
const BuildSchema = require('./Build')
const CaseSchema = require('./Case')
const KeycapSchema = require('./Keycap')
const SwitchSchema = require('./Switch')


const User = mongoose.model('users', UserSchema)
const Build = mongoose.model('builds', BuildSchema)
const Case = mongoose.model('cases', CaseSchema)
const Keycap = mongoose.model('keycaps', KeycapSchema)
const Switch = mongoose.model('switches', SwitchSchema)



module.exports = {
    User,
    Build,
    Case,
    Keycap,
    Switch
}