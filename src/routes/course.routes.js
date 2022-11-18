const express = require("express")
const courseController = require("../controllers/course.controller")
require("dotenv").config()

const routes = express.Router()

const ROUTE_PATH = `/${process.env.API_VERSION}/course`

routes.get(`${ROUTE_PATH}`, courseController.findAll)
routes.get(`${ROUTE_PATH}/:id`, courseController.findById)

routes.post(`${ROUTE_PATH}/:id/category`, courseController.appendCategories)
routes.post(`${ROUTE_PATH}/:id/video`, courseController.appendVideos)
routes.post(ROUTE_PATH, courseController.create)
routes.patch(`${ROUTE_PATH}/:id`, courseController.update)
routes.delete(`${ROUTE_PATH}/:id`, courseController.delete)


module.exports = routes