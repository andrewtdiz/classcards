const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    userImage: String,
    email: String,
    deckIds: [String],
    likedHands: [String],
})

module.exports = mongoose.model('User', userSchema)

