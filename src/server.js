const app = require("./app")
const db = require("./database/database")
const initModels = require("./models/initModels")
require("dotenv").config()

HOSTNAME = process.env.HOSTNAME
PORT = process.env.PORT

const main = async () => {

    initModels()

    try {
        await db.sync({force: true})
        console.log("Models created successfully")
    } catch (error) {
        console.log(error)
    }

    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server running at http://${HOSTNAME}:${PORT}`)
    })
}

main()

