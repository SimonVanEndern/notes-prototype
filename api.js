const express = require('express')

module.exports = function () {
	APIRouter = express.Router()

	APIRouter.all('*', function (req, res, next) {
		res.status(201)
		next()
	})

	APIRouter.get('/info', function (req, res, next) {
		res.json({"api-version": 1.0})
	})

	APIRouter.get('*', function (req, res, next) {
		res.json({test:true})
	})

	return APIRouter
}