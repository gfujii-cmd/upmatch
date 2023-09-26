const  { mongoose, Schema } = require("mongoose");

const PlayerSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    name: Schema.Types.String,
    surname: Schema.Types.String,
    nickname: Schema.Types.String,
    // email: Schema.Types.String,
    // password: Schema.Types.String,
    totalPoints: Schema.Types.Number
})

const PlayerModel = mongoose.model('Players', PlayerSchema)

module.exports = {
    PlayerModel
}