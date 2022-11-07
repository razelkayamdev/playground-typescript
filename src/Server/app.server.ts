import { DataStore } from "../Datastore/datastore";
import { ExpressServer } from "./express.server";

export class AppServer {

    private experssServer: ExpressServer;

    constructor(dataStore: DataStore) {
        this.experssServer = new ExpressServer({
            port: 3001,
            dataStore
        });
    }

    public start() {
        this.experssServer.listen();
    }
}