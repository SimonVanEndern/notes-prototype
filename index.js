const express = require('express')
const api = require('./api')

let port = 80

var app = express()

if (app.env == "dev") {
	port = 80
} else {
	port = 443
}

app.use('/api', api())

app.get('*', function (req, res, next) {
	res.status(200).send("Hello World")
})

app.listen(port)