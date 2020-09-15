const mongoose = require('mongoose')

const ListsPodcastsSchema = mongoose.Schema({
    listId: {
       //foreignKey 
    },
    podcastId: {
       //foreignKey
    },
})

module.exports = mongoose.model('ListsPodcasts', ListsPodcastsSchema)