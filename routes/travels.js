
const { Router } = require('express');

const { travelsGet,
        travelsPost,
        travelPut,
        travelsDelete } = require('../controller/travels');
const { check } = require('express-validator');
const { validators } = require('../middlewares/validators');
const { esRoleValid, existUserById, existTravelById } = require('../helpers/db-validator');


const router = Router();


router.get('/', travelsGet );

router.post('/', travelsPost);

router.put('/:id',travelPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validators
],travelsDelete );



module.exports = router;