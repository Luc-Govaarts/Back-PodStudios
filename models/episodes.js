const mongoose = require('mongoose')

const EpisodesSchema = mongoose.Schema({
    podcastId: {
       //foreignKey
    },
})

module.exports = mongoose.model('Podcasts', EpisodesSchema)