var express = require('express')

var app = express()

app.get('*', function (req, res, next) {
	res.status(200).send("Hello World")
})

app.listen(80)