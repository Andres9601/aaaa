const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server{

    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.travelsPath = '/api/travels';
        this.usersPath = '/api/users';
        
        
        //Connections DB

        this.conectarDB();
        
        // Middlewares
        this.middlewares();

        // app routes
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // read y parse of body
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('backend/public') );

    }

    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.travelsPath, require('../routes/travels'));
        this.app.use( this.usersPath, require('../routes/users'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server in port', this.port );
        });
    }

    
}

module.exports =Server;