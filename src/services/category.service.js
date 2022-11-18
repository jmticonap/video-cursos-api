const {
    CategoryModel,
    CourseModel
} = require("../models")

const CategoryService = {
    findAll: async (req, res) => {
        try {
            const { offset, limit } = req.query
            const categories = await CategoryModel.findAll({
                offset: offset || 0,
                limit: limit || 20
            })
            res.status(200)
            res.json(categories)
            res.end()
        } catch (error) {
            throw error
        }
    },
    findById: async (req, res) => {
        try {
            const { id } = req.params
            const categories = await CategoryModel.findByPk(id)
            res.status(200)
            res.json(categories)
            res.end()
        } catch (error) {
            throw error
        }
    },
    findByCourse: async (req, res) => {
        try {
            const { id } = req.params
            const categories = await CategoryModel.findAll({
                where: {
                    course_id: id
                }
            })
            res.status(200)
            res.json(categories)
            res.end()
        } catch (error) {
            throw error
        }
    },
    create: async (req, res) => {
        try {
            const new_category = await CategoryModel.create(
                req.body
            )
            res.status(201)
            res.json(new_category)
            res.end()
        } catch (error) {
            throw error
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const updatables_fields = ["name"]

            const category = await CategoryModel.findByPk(id)

            //Deleting NO updatables fields from object
            Object.keys(req.body).forEach(key => {
                !updatables_fields.includes(key) && delete req.body[key]
            })
            if (Object.keys(req.body).length == 0)
                throw "No one field can be update."

            await category.update(req.body)
            await category.save()

            await category.reload()
            res.status(200)
            res.json(category)
            res.end()
        } catch (error) {
            throw error
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params

            const categogry = await CategoryModel.findByPk(id)
            await categogry.destroy()

            res.status(204)
            res.end()
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoryService