const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:aqAsynFRRQe8UipP@cluster0.xs3ynlq.mongodb.net/businessCard")

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    linkedin: String,
    twitter: String
})

const card = mongoose.model("cards", cardSchema);

module.exports = {
    card
}