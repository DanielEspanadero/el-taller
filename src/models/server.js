const express = require('express');
const path = require('path');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        // Application Paths
        this.homepagePath = '/';
        this.loginPath = '/login';
        
        // Middlewares
        this.middlewares();
        
        // Path method
        this.routes();
    }

    middlewares() {
        // Public directory
        this.app.use(express.static(path.resolve(`${__dirname}../../public`)));

        // CORS
        this.app.use(cors());

        // Reading and parsing the body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.homepagePath, require('../routes/homepage'));
        this.app.use(this.loginPath, require('../routes/login'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening in the port ${this.port}`);
        });
    };
};

module.exports = Server;