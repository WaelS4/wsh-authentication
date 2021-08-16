const express = require('express')
const { register, login, getUser } = require('../controllers/user.controller')
const isAuth = require('../middlewares/isAuth')
const { registerRules, validator } = require('../middlewares/validator')

const router = express.Router()


router.post('/register', registerRules(), validator, register)
router.post('/login', login)
router.get('/getuser', isAuth,getUser)


module.exports = router
