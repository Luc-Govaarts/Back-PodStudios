require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const { PORT }= require('./config')

const app = express()

//Listening

app.listen(PORT, console.log(`listening at ${PORT}`))

//Connecting to DB

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('CONNECTED TO DATABASE')
	}
)
