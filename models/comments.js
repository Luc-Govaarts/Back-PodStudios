const mongoose = require('mongoose')

const CommentsSchema = mongoose.Schema({
    userId: {
        //foreignKey
    },
    PodcastId: {
        //foreignKey
    },
    EpisodeId: {
        //foreignKey
    },
    ListId: {
        //foreignKey
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('Comments', CommentsSchema)