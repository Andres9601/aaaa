
const mongoose = require('mongoose');


const dbConnection = async() =>{

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        });

        console.log('Data base online');
        
    } catch (error) {
        throw new Error('Error in data base')
    }

}



module.exports = {
    dbConnection
}