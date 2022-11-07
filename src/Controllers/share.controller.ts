import { DataStore } from "../Datastore/datastore";
import { Share, ShareDbModel } from "../Models/share.db.model";
import { UniqueIdGenerator } from "../Models/uniqueId";


export class ShareController {
    private dataStore: DataStore;
    private uniqueIdGenerator = new UniqueIdGenerator();

    constructor(dataStore: DataStore) {
        this.dataStore = dataStore;
    }

    public async getShare(uniqueId: string): Promise<Share> {
        const shareDbModel = await this.dataStore.findShare(uniqueId);
        if (shareDbModel) {
            return shareDbModel.toJSON();
        }
        return {} as Share;
    }

    public async addShare(sharingUserId?: number, siteId?: number, cycleId?: number): Promise<string> {

        if (sharingUserId != undefined && siteId != undefined && cycleId != undefined) {

            const uniqueId = this.uniqueIdGenerator.createUniqueId(sharingUserId!, siteId!, cycleId!);
            await this.dataStore.addShare(uniqueId, sharingUserId, siteId, cycleId);
            return uniqueId;

        } else {
            return Promise.reject("Missing values");
        }
    }
}