const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const morgan = require('morgan')

//! Config
const { dbURI, port } = require('./config')


//! NextJS handler
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


//! app prepare
app
    .prepare()
    .then(() => {
        const server = express()
        server.use(morgan("dev"))
        require("./models/User")
        //! MONGODB CONNECTION
        mongoose.set('useCreateIndex', true);
        mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }) // eslint-disable-line
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
        server.use(express.json())
        server.use(require('./router'))
        server.get('*', (req, res) => {
            return handle(req, res) //* for all the react stuff
        })
            //* Port 
            .set('port', (port))
            .listen(server.get('port'), function () {
                console.log('Server started on port ' + server.get('port'))
            })
    })
