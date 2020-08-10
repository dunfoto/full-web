module.exports = {
    dbURI: `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    port: process.env.PORT || 3000,
    secret: process.env.JWT_KEY
}