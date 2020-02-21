const express = require('express')
const api = require('./api')

let port = 80

var app = express()

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27020/persons", {useNewUrlParser: true})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
	console.log("DB open")
})

if (app.locals.settings.env == "development") {
	port = 80
} else {
	port = 443
}

app.use('/api/v1', express.json({type:"application/json"}), api())
app.use('/', express.static(__dirname + "/static"))
app.use(express.json({type:"application/json"}))
app.use(express.urlencoded({extended: false}))

app.get('*', function (req, res, next) {
	res.status(200).send("Hello World")
})

app.listen(port)