const router = require('express').Router()
const Authentication = require('../controllers/authControllers')

router.get('/user', (req, res) => {
    res.send({ user: req.user })
})
router.post('/login', Authentication.login)
router.post('/logout', Authentication.logout)
router.post('/register', Authentication.register)


module.exports = router 