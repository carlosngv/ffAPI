import express, { Router } from 'express';
import compression from 'compression';

export interface Options {
    port: number;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor( options: Options ) {
        this.port = options.port;
        this.routes = options.routes;
    }

    async start() {

        this.app.use( express.json() );
        this.app.use( compression() );

        this.app.use( this.routes );

        this.app.get('*', ( req, res ) => {
            res.status(404).json({
                msg: 'Route not found',
            })
        });

        this.app.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }...`);
        });


    }

}
