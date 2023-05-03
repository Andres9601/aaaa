const {Schema, model} = require('mongoose')

const TravelSchema = Schema({
    namePlace:{
        type:String,
        required:[true, 'the name is required']
    },
    country:{
        type:String,
        required:[true, 'the country is required']
    },
    price:{
        type:Number,
        required:[true, 'the price is required']
    },
    description:{
        type:String,
        required:[true, 'the description is required']
    },
    img:{
        type:String
    }
})

module.exports= model('Travel', TravelSchema)