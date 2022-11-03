import { ExpressServer } from "./express.server";

export class AppServer {

    private experssServer: ExpressServer;

    constructor(port: number) {
        this.experssServer = new ExpressServer(port);
    }

    public start() {
        this.experssServer.listen();
    }
}