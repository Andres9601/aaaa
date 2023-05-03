const { validationResult } = require("express-validator");


const validators = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(404).json(errors)
    }

    next();
}

module.exports={
    validators
}