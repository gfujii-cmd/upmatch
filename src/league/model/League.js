const  { mongoose, Schema } = require("mongoose");

const LeagueSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    players: [],
    endDate: Schema.Types.String,
    startDate: Schema.Types.String,
    typeOfLeague: Schema.Types.String,
    storeName: Schema.Types.String,
    game: Schema.Types.String,
    status: Schema.Types.Boolean
})

const LeagueModel = mongoose.model('Leagues', LeagueSchema)

module.exports = {
    LeagueModel
}