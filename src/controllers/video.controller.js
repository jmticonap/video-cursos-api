const videoService = require("../services/video.service")


const videoController = {
    findAll: async (req, res, next) => {
        try {
            await videoService.findAll(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    findById: async (req, res, next) => {
        try {
            await videoService.findById(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    create: async (req, res, next) => {
        try {
            await videoService.create(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    update: async (req, res, next) => {
        try {
            await videoService.update(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    delete: async (req, res, next) => {
        try {
            await videoService.delete(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
}

module.exports = videoController