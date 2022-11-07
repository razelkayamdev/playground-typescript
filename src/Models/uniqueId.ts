import * as crypto from "crypto";

export class UniqueIdGenerator {

    public createUniqueId(userId: number, site: number, cycleId: number, uuid: string = crypto.randomUUID()) {
        const string = `${userId}/${uuid}/${site}/${cycleId}`;
        const sha256Hasher = crypto.createHash("sha256");
        return sha256Hasher.update(string).digest("hex");
    }
}