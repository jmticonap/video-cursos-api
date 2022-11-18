const express = require("express")
const categoryController = require("../controllers/category.controller")
require("dotenv").config()

const routes = express.Router()

const ROUTE_PATH = `/${process.env.API_VERSION}/category`

routes.get(`${ROUTE_PATH}`, categoryController.findAll)
routes.get(`${ROUTE_PATH}/:id`, categoryController.findById)
routes.get(`${ROUTE_PATH}/:id/course`, categoryController.findByCourse)
routes.post(`${ROUTE_PATH}`, categoryController.create)
routes.patch(`${ROUTE_PATH}/:id`, categoryController.update)
routes.delete(`${ROUTE_PATH}/:id`, categoryController.delete)

module.exports = routes
