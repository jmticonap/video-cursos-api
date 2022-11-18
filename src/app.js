
const express = require("express")
const cors = require("cors")

const userRoute = require("./routes/user.routes")
const courseRoute = require("./routes/course.routes")
const categoryRoute = require("./routes/category.routes")
const videoRoute = require("./routes/video.routes")
const errorHandler = require("./middlewares/error.middleware")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", userRoute)
app.use("/api", courseRoute)
app.use("/api", categoryRoute)
app.use("/api", videoRoute)

app.use(errorHandler)

module.exports = app
