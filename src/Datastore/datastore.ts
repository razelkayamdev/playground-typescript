import { Sequelize } from 'sequelize-typescript';
import { ShareDbModel } from '../Models/share.db.model';

export class DataStore {

    private sequelize: Sequelize;

    constructor(host: string) {
        this.sequelize = new Sequelize({
            database: "PLAYGROUND_DB",
            dialect: "mysql",
            username: "root",
            password: "password",
            host,
            port: 3306, 
            logging: console.log
        });
    }

    public loadModels() {
        this.sequelize.addModels([ShareDbModel]);
    }

    public async testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    public async findShare(uniqueId: string): Promise<ShareDbModel | null> {
        return await ShareDbModel.findOne({ where: { uniqueId } });
    }

    public async addShare(uniqueId: string, sharingUserId: number, siteId: number, cycleId: number): Promise<void> {
        const share = ShareDbModel.build({
            createdAt: new Date(),
            sharingUserId,
            siteId,
            cycleId,
            uniqueId
        });
        
        await share.save();
    }
}