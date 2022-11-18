
const errorHandler = (error, req, res, next) => {
    const { status, errorMessage } = error

    res.status(status)
    res.json(errorMessage.message)
}

module.exports = errorHandler