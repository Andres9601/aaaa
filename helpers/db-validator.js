
const Role = require('../models/role');
const User = require('../models/users');

const esRoleValid = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if(!existeRol){
        throw new Error(`El ${rol} no esta registrado en la base de datos`)
    }
}

const emailExist = async( email = '' ) => {

    // Verificar si el correo existe
    const existEmail = await User.findOne({ email });
    if ( existEmail ) {
        throw new Error(`The email: ${ email }, the email already exists`);
    }
}

const existUserById = async( id ) => {

    // Verificar si el correo existe
    const existeUser = await User.findById(id);
    if ( !existeUser ) {
        throw new Error(`The id does not exist ${ id }`);
    }
}

const existTravelById = async( id ) => {

    // Verificar si el viaje existe
    const existTravel = await Travel.findById(id);
    if ( !existTravel ) {
        throw new Error(`The id does not exist ${ id }`);
    }
}


module.exports= {
    esRoleValid,
    emailExist,
    existUserById,
    existTravelById
}