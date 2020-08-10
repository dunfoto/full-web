const router = require('express').Router()

router.use('/api/auth', require('./routes/auth'))

module.exports = router