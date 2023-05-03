const {Schema, model} = require('mongoose');

const RoleSchema = Schema({
    rol:{
        type:String,
        required:[true, 'El rol is necesary'],

    }
});


module.exports= model('Role',RoleSchema);