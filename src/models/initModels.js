const {
    UserModel,
    SocialsModel,
    CourseModel,
    UserCourseModel,
    CategoryModel,
    VideoModel
} = require("./index")

const initModels = () => {
    UserModel.belongsToMany(CourseModel, { 
        through: UserCourseModel,
        as: "courses"
    })
    CourseModel.belongsToMany(UserModel, { 
        through: UserCourseModel,
        as: "courses"
    })
    
    UserModel.hasMany(SocialsModel, {
        as: "socials",
        foreignKey: "user_id",
        sourceKey: "id"
    })
    SocialsModel.belongsTo(UserModel, {
        foreignKey: "user_id",
        targetKey: "id"
    })
    
    CourseModel.hasMany(CategoryModel, {
        as: 'categories',
        foreignKey: 'course_id',
        sourceKey: 'id'
    })
    CategoryModel.belongsTo(CourseModel, {
        foreignKey: 'course_id',
        targetKey: 'id'
    })

    CourseModel.hasMany(VideoModel, {
        as: 'videos',
        foreignKey: 'course_id',
        sourceKey: 'id'
    })
    VideoModel.belongsTo(CourseModel, {
        foreignKey: 'course_id',
        targetKey: 'id'
    })

}

module.exports = initModels