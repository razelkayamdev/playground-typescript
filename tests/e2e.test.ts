import axios from "axios";

type ShareModel = {
    sharingUserId: number;
    siteId: number;
    cycleId: number;
};

test("POSTing and GETting a share", async () => {

    const postUrl = "http://localhost:3001/share";
    const body = {
        sharingUserId: 0,
        siteId: 1,
        cycleId: 2
    };

    const postResponse = await axios.post<Record<string,string>>(postUrl, body);
    const { uniqueId } = postResponse.data;

    expect(uniqueId).toBeDefined();

    console.log(`Using ${uniqueId} to fetch content.`);
    const getUrl = `http://localhost:3001/share/${uniqueId}`;
    const getResponse = await axios.get<ShareModel>(getUrl);
    const share = getResponse.data;

    expect(share.sharingUserId).toBe(0);
    expect(share.siteId).toBe(1);
    expect(share.cycleId).toBe(2);
});
