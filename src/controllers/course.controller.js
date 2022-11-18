const courseService = require("../services/course.service")

const courseController = {
    findAll: async (req, res, next) => {
        try {
            await courseService.findAll(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    findById: async (req, res, next) => {
        try {
            await courseService.findById(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    appendCategories:async (req, res, next) => {
        try {
            await courseService.appendCategories(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    appendVideos:async (req, res, next) => {
        try {
            await courseService.appendVideos(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    create: async (req, res, next) => {
        try {
            await courseService.create(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    update: async (req, res, next) => {
        try {
            await courseService.update(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    delete: async (req, res, next) => {
        try {
            await courseService.delete(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    }
}

module.exports = courseController