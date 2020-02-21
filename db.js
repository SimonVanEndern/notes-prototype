const mongoose = require('mongoose')
const Person = require('./person')()

mongoose.connect("mongodb://localhost:27020/persons", {useNewUrlParser: true})

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
	db.once('open', function () {
		console.log("DB open")
	})

module.exports.insert = async function () {
	console.log("Trying to insert")
	try{
		let me = new Person({
			name:"Me",
			age: 23
		})
		await me.save(function (err, me) {
			if (err) console.log(err)
				else console.log(me)
		})
		return
	}catch (err) {
		console.log(err)
	}
}

module.exports.get = async function () {
	try {
		var persons = await Person.find(function (err, persons) {
			if (err) console.log(err)

		})
		console.log(persons)
		return persons
	}catch (err) {
		console.log(err)
	}
}