const {
    UserModel,
    SocialsModel,
    CourseModel
} = require("../models")

const toFilterModelFields = {
    include: [
        {
            model: SocialsModel,
            as: "socials",
            attributes: {
                exclude: ["user_id"]
            }
        },
        {
            model: CourseModel,
            as: "courses"
        }
    ],
    attributes: {
        exclude: ["password", "createdAt", "updatedAt"]
    }
}

const userService = {
    findAll: async (req, res) => {
        try {
            const { offset, limit } = req.query
            const users = await UserModel.findAll({
                offset: offset || 0,
                limit: limit || 20,
                ...toFilterModelFields
            })
            res.status(200)
            res.json(users)
            res.end()
        } catch (error) {
            throw error
        }
    },
    findById: async (req, res) => {
        try {
            const { id } = req.params
            const users = await UserModel.findByPk(id, toFilterModelFields)
            res.status(200)
            res.json(users)
            res.end()
        } catch (error) {
            throw error
        }
    },
    create: async (req, res) => {
        try {
            const isSocials = req.body.hasOwnProperty('socials')
            const isCourses = req.body.hasOwnProperty('courses')
            const new_user = await UserModel.create(
                req.body,
                (isSocials || isCourses) && {
                    include: [
                        isSocials && {
                            model: SocialsModel,
                            as: "socials"
                        },
                        isCourses && {
                            model: CourseModel,
                            as: "courses"
                        }
                    ]
                }
            )
            res.status(201)
            const user = await UserModel.findByPk(new_user.id, toFilterModelFields)
            res.json(user)
            res.end()
        } catch (error) {
            throw error
        }
    },
    appendCourses: async (req, res) => {
        try {
            const { id } = req.params
            const user = await UserModel.findByPk(id, {
                include: {
                    model: CourseModel,
                    as: "courses"
                }
            });

            req.body.forEach(async courseId => {
                await user.addCourses(
                    await CourseModel.findByPk(courseId)
                )
            })

            await user.reload() //FIXME: don't work

            res.status(200)
            res.json(user)
            res.end()
        } catch (error) {
            throw error
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const updatables_fields = ["firstname", "lastname", "password"]
        try {
            let user = await UserModel.findByPk(id)
            //Deleting NO updatables fields from object
            Object.keys(req.body).forEach(key => {
                !updatables_fields.includes(key) && delete req.body[key]
            })
            if (Object.keys(req.body).length == 0)
                throw "No one field can be update."
            await user.update(req.body)
            await user.save()
            
            user = await UserModel.findByPk(user.id, {
                attributes: toFilterModelFields.attributes
            })

            res.status(200)
            res.json(user)
            res.end()
        } catch (error) {
            throw error
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const course = await UserModel.findByPk(id)
            await course.destroy()
        } catch (error) {
            throw error
        }
        res.status(204)
        res.end()
    }
}

module.exports = userService