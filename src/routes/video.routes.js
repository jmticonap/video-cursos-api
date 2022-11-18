const express = require("express")
const videoController = require("../controllers/video.controller")
require("dotenv").config()

const routes = express.Router()

const ROUTE_PATH = `/${process.env.API_VERSION}/video`

routes.get(`${ROUTE_PATH}`, videoController.findAll)
routes.get(`${ROUTE_PATH}/:id`, videoController.findById)

routes.post(`${ROUTE_PATH}`, videoController.create)
routes.patch(`${ROUTE_PATH}/:id`, videoController.update)
routes.delete(`${ROUTE_PATH}/:id`, videoController.delete)

module.exports = routes
