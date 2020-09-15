const mongoose = require('mongoose')

const ListsSchema = mongoose.Schema({
    userId: {
        //forgeinKey
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Lists', ListsSchema)