
const jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');


exports.login = function (req, res) {
    User.findOne({ $or: [{ email: req.body.id }, { username: req.body.id }] }, (err, user) => {
        if (err || !user) return res.status(500).send({ auth: false, message: "UserName or Password not correct!" });
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null })
        const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_KEY, {
            expiresIn: 86400
        })
        delete user.password
        return res.status(200).send({ auth: true, token, currentUser: user })
    })
}

//! Logout Controller
exports.logout = function (req, res) {
    // res.send({lol: 'lol mdr bordel de merde'})
}

//! Register Controller
exports.register = (req, res) => {
    let { body } = req
    body.password = bcrypt.hashSync(body.password, 8)
    if (!body.email || !body.password || !body.username) {
        return res.status(422).send({ error: 'Email and password must be provided' })
    }
    User.create(body, (err, user) => {
        if (err) return res.status(500).send(err)
        delete user.password
        const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_KEY, {
            expiresIn: 86400
        })
        return res.status(200).send({ auth: true, token, currentUser: user })
    })
}



