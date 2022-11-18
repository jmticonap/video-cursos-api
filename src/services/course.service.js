const {
    CourseModel,
    CategoryModel,
    VideoModel
} = require("../models")

const courseService = {
    findAll: async (req, res) => {
        try {
            const { offset, limit } = req.query
            const courses = await CourseModel.findAll({
                offset: offset || 0,
                limit: limit || 20,
                include:[
                    {
                        model: CategoryModel,
                        as: "categories",
                        attributes:{
                            include: ["name"]
                        }
                    },
                    {
                        model: VideoModel,
                        as: "videos",
                        attributes:{
                            include: ["title", "url"]
                        }
                    }
                ]
            })
            res.status(200)
            res.json(courses)
            res.end()
        } catch (error) {
            throw error
        }
    },
    findById: async (req, res) => {
        try {
            const { id } = req.params
            const course = await UserModel.findByPk(id)
            res.status(200)
            res.json(course)
            res.end()
        } catch (error) {
            throw error
        }
    },
    appendCategories: async (req, res) => {
        try {
            const { id } = req.params
            const course = await CourseModel.findByPk(id, {
                include: {
                    model: CategoryModel,
                    as: "categories"
                }
            });

            req.body.forEach(async categoryId => {
                await course.addCategories(
                    await CategoryModel.findByPk(categoryId)
                )
            })

            await course.reload()

            res.status(200)
            res.json(course)
            res.end()
        } catch (error) {
            throw error
        }
    },
    appendVideos: async (req, res) => {
        try {
            const { id } = req.params
            const course = await CategoryModel.findByPk(id, {
                include: VideoModel
            });

            req.body.forEach(async videoId => {
                await course.addVideoModel(
                    await VideoModel.findByPk(videoId)
                )
            })

            await course.reload()

            res.status(200)
            res.json(course)
            res.end()
        } catch (error) {
            throw error
        }
    },
    create: async (req, res) => {
        try {
            const isCategories = req.body.hasOwnProperty('categories')
            const isVideos = req.body.hasOwnProperty('videos')
            const new_course = await CourseModel.create(
                req.body,
                (isCategories || isVideos) && {
                    include: [
                        isCategories && {
                            model: CategoryModel,
                            as: "categories"
                        },
                        isVideos && {
                            model: VideoModel,
                            as: "videos"
                        }
                    ]
                }
            )
            res.status(201)
            const course = await CourseModel.findByPk(new_course.id)
            res.json(course)
            res.end()
        } catch (error) {
            throw error
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const updatables_fields = ["description"]
        try {
            let course = await CourseModel.findByPk(id)
            //Deleting NO updatables fields from object
            Object.keys(req.body).forEach(key => {
                !updatables_fields.includes(key) && delete req.body[key]
            })
            if (Object.keys(req.body).length == 0)
                throw "No one field can be update."
            
            await course.update(req.body)
            await course.save()

            course = await CourseModel.findByPk(course.id)

            res.status(200)
            res.json(course)
            res.end()
        } catch (error) {
            throw error
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const course = await CourseModel.findByPk(id)
            await course.destroy()
        } catch (error) {
            throw error
        }
        res.status(204)
        res.end()
    }
}

module.exports = courseService