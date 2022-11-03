// Playground.

import { DataStore } from "./Datastore/datastore";
import { AppServer } from "./Server/app.server";

function start() {
    console.log("Hello World!");

    const server = new AppServer(3001);
    server.start();


    const dataStore = new DataStore();
    dataStore.testConnection();
}

start();