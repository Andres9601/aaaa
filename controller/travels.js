const { response, request } = require('express');

const  Travel  = require('../models/travel');

const bcryptjs = require('bcryptjs');



const travelsGet = async(req = request, res = response) => {

    const travels = await Travel.find();

    res.json({
        travels
    });
}


const travelsPost = async(req, res= response) => {
    const body = req.body;
    const travel = new Travel(body);

    await travel.save();

    res.json({
        msg:'post API - travelsPOST',
        travel
    })
}

const travelPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, namePlace, country, price, ...resto } = req.body;

    const travel = await Travel.findByIdAndUpdate( id, resto );

    res.json(travel);
}

const travelsDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const travel = await Travel.findByIdAndDelete( id );


    res.json(travel);
}




module.exports = {
    travelsGet,
    travelsPost,
    travelPut,
    travelsDelete
    
}