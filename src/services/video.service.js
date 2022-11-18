const {
    VideoModel
} = require("../models")

const videoService = {
    findAll: async (req, res) => {
        try {
            const { offset, limit } = req.query
            const videos = await VideoModel.findAll({
                offset: offset || 0,
                limit: limit || 20
            })
            res.status(200)
            res.json(videos)
            res.end()
        } catch (error) {
            throw error
        }
    },
    findById: async (req, res) => {
        try {
            const { id } = req.params
            const videos = await VideoModel.findByPk(id)
            res.status(200)
            res.json(videos)
            res.end()
        } catch (error) {
            throw error
        }
    },
    create: async (req, res) => {
        try {
            const new_video = await VideoModel.create(
                req.body
            )
            res.status(201)
            res.json(new_video)
            res.end()
        } catch (error) {
            throw error
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const updatables_fields = ["title"]

            const video = await VideoModel.findByPk(id)

            //Deleting NO updatables fields from object
            Object.keys(req.body).forEach(key => {
                !updatables_fields.includes(key) && delete req.body[key]
            })
            if (Object.keys(req.body).length == 0)
                throw "No one field can be update."

            await video.update(req.body)
            await video.save()

            await video.reload()
            res.status(200)
            res.json(video)
            res.end()
        } catch (error) {
            throw error
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params

            const video = await VideoModel.findByPk(id)
            await video.destroy()

            res.status(204)
            res.end()
        } catch (error) {
            throw error
        }
    }
}

module.exports = videoService