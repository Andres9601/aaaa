
const { Router } = require('express');

const { usersGet,
        usersPut,
        usersPost,
        usersDelete,
        usersPatch } = require('../controller/users');
const { check } = require('express-validator');
const { validators } = require('../middlewares/validators');
const { esRoleValid, emailExist, existUserById } = require('../helpers/db-validator');


const router = Router();


router.get('/', usersGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existUserById ),
    check('rol').custom( esRoleValid), 
    validators
],usersPut );

router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'the password is mandatory and a maximum of 6 letters').not().isEmpty().isLength({min: 6 }),
    check('email', 'the entered value is invalid').isEmail(),
    check('email').custom( emailExist ),
    validators
], usersPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existUserById ),
    validators
],usersDelete );

router.patch('/', usersPatch );





module.exports = router;