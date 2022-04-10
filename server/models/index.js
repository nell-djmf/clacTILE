const mongoose = require('mongoose')
const UserSchema = require('./user')
const BuildSchema = require('./build')
const CaseSchema = require('./case')
const KeycapSchema = require('./keycap')
const SwitchSchema = require('./switch')



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