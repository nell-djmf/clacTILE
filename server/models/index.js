const mongoose = require('mongoose')
const UserSchema = require('./User')
const ListSchema = require('./List')
const BuildSchema = require('./Build')
const CaseSchema = require('./Case')
const KeycapSchema = require('./Keycap')
const SwitchSchema = require('./Switch')


const User = mongoose.model('users', UserSchema)
const List = mongoose.model('lists', ListSchema)
const Build = mongoose.model('builds', BuildSchema)
const Case = mongoose.model('cases', CaseSchema)
const Keycap = mongoose.model('keycaps', KeycapSchema)
const Switch = mongoose.model('switches', SwitchSchema)



module.exports = {
    User,
    List,
    Build,
    Case,
    Keycap,
    Switch
}