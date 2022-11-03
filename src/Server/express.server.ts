import express from 'express';
import { Application, Response, Request } from 'express';
import { Server } from 'http';
import { isAliveRoute } from '../Routes/is_alive.route';

export class ExpressServer {
    
    private app: Application;
    private port: number;
    private server: Server | undefined;

    constructor(port: number) {

        this.app = express();
        this.app.use(express.json());
        this.app.use(this.errorHandler);
        this.port = port;

        this.setupLogs();
        this.loadRouters();
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Express server is listening on http://localhost:${this.port}`);
        })
    }

    private loadRouters() {
        this.app.use(isAliveRoute);
    }

    private setupLogs() {
        const morgan = require('morgan');
        this.app.use(morgan("combined"));
    }

    private errorHandler(err: any, req: Request, res: Response, next: any) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
        next();
    }
}