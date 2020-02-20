var express = require('express')

var app = express()

APIrouter = express.Router()

APIrouter.get('*', function (req, res, next) {
	res.status(200).json({})
})

app.use('/api', APIrouter)

app.get('*', function (req, res, next) {
	res.status(200).send("Hello World")
})

app.listen(80)