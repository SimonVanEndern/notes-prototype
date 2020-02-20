const express = require('express')

module.exports = function () {
	APIRouter = express.Router()

	APIRouter.all('*', function (req, res, next) {
		res.status(200)
		next()
	})

	APIRouter.get('/info', function (req, res, next) {
		res.json({"api-version": 1.0})
	})

	APIRouter.get('*', function (req, res, next) {
		res.json({test:true})
	})

	APIRouter.route('/person')
		.get(function (req, res, next) {
			res.json({id: 1})
		})
		.post(function (req, res, next) {
			res.status(201)
			.send("Created")
		})
		.delete(function (req, res, next) {
			res.status(204)
			.send("Deleted")
		})

	return APIRouter
}