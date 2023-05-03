
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controller/auth');
const { validators } = require('../middlewares/validators');


const  router = Router();


router.post('/login',[
    check('email', 'the email is required').isEmail(),
    check('password', 'the password is required').not().isEmpty(),
    validators
], login)


module.exports = router;