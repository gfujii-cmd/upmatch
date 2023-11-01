const  { mongoose, Schema } = require("mongoose");

const LeagueSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    players: [],
    typeOfLeague: Schema.Types.String,
    date: Schema.Types.String
})

const LeagueModel = mongoose.model('Leagues', LeagueSchema)

module.exports = {
    LeagueModel
}