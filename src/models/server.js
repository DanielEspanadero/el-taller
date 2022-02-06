const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        // this.middlewares();

        // Application Paths
        this.routes();
    };

    // middlewares() {
        // Direcctorio público
    //     this.app.use(express.static('public'));
    // }

    routes() {
        this.app.get('/', (req, res) =>{
            res.send('Hello Word');
        })
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening in the port ${this.port}`);
        });
    };
};

module.exports = Server;