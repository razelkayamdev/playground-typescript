// Playground.

import { DataStore } from "./Datastore/datastore";
import { AppServer } from "./Server/app.server";

function start() {
    const configuration = loadConfiguration();

    const dataStore = new DataStore(configuration.sequelizeHost);
    dataStore.testConnection();
    dataStore.loadModels();

    const server = new AppServer(dataStore);
    server.start();
}

function loadConfiguration() {
    return {
        sequelizeHost: process.env.SEQUELIZE_HOST!
    };
}

start();