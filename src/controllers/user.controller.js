const userService = require("../services/user.service")

const userController = {
    findAll: async (req, res, next) => {
        try {
            await userService.findAll(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    findById: async (req, res, next) => {
        try {
            await userService.findById(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    findByPkCourses: async (req, res, next) => {
        try {
            await userService.findByPkCourses(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    createNew: async (req, res, next) => {
        try {
            await userService.create(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    appendCourses: async (req, res, next) => {
        try {
            await userService.appendCourses(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    update: async (req, res, next) => {
        try {
            await userService.update(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    delete: async (req, res, next) => {
        try {
            await userService.delete(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    }
}

module.exports = userController