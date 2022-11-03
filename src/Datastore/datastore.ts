import { Sequelize } from 'sequelize';

export class DataStore {

    private sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize({
            database: "PLAYGROUND_DB",
            dialect: "mysql",
            username: "root",
            password: "password",
            host: "127.0.0.1",
            port: 3306
        });
    }

    public async testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}