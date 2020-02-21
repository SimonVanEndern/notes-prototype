const express = require('express')
const db = require('./db')
const Person = require('./person')

module.exports = function () {
	APIRouter = express.Router()

	APIRouter.all('*', function (req, res, next) {
		res.status(200)
		next()
	})

	APIRouter.get('/info', function (req, res, next) {
		res.json({"api-version": 1.0})
	})

	APIRouter.route('/person')
		.get(function (req, res, next) {
			Person.find(function (err, persons) {
				if (err) {console.log(err)}
					else res.json(persons)
			})
		})
		.post(async function (req, res, next) {
			let person = new Person({
				"name": "Me",
				"age": 44
			})
			await person.save()
			res.status(201)
			.send("Created")
		})
		.delete(function (req, res, next) {
			res.status(204)
			.send("Deleted")
		})


	APIRouter.get('*', function (req, res, next) {
		res.json({test:true})
	})

	return APIRouter
}