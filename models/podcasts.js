const mongoose = require('mongoose')

const PodcastsSchema = mongoose.Schema({
    listsPodcastsId: {
        //forgeinKey
    },
})

module.exports = mongoose.model('Podcasts', PodcastsSchema)