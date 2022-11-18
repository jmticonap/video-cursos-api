const express = require("express")
const userController = require("../controllers/user.controller")
require("dotenv").config()

const routes = express.Router()

const ROUTE_PATH = `/${process.env.API_VERSION}/user`

routes.get(`${ROUTE_PATH}`, userController.findAll)
routes.get(`${ROUTE_PATH}/:id`, userController.findById)

routes.get(`${ROUTE_PATH}/:id/courses`, userController.findByPkCourses)
routes.post(ROUTE_PATH, userController.createNew)
routes.post(`${ROUTE_PATH}/:id/courses`, userController.appendCourses)
routes.patch(`${ROUTE_PATH}/:id`, userController.update)
routes.delete(`${ROUTE_PATH}/:id`, userController.delete)


module.exports = routes