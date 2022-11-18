const CategoryService = require("../services/category.service")


const categoryController = {
    findAll: async (req, res, next) => {
        try {
            await CategoryService.findAll(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    findById: async (req, res, next) => {
        try {
            await CategoryService.findById(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    findByCourse: async (req, res, next) => {
        try {
            await CategoryService.findByCourse(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    create: async (req, res, next) => {
        try {
            await CategoryService.create(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    update: async (req, res, next) => {
        try {
            await CategoryService.update(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
    delete: async (req, res, next) => {
        try {
            await CategoryService.delete(req, res)
        } catch (error) {
            next({
                status: 418,
                errorMessage: error
            })
        }
    },
}

module.exports = categoryController