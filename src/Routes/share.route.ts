import { Router, Request, Response, NextFunction } from "express";
import { ShareController } from "../Controllers/share.controller";
import { DataStore } from "../Datastore/datastore";

export function shareRoute(dataStore: DataStore): Router {

  const shareRoute = Router();
  const controller = new ShareController(dataStore);

  shareRoute.get("/share/:id", async (req: Request, res: Response, next: NextFunction) => {
    const uniqueShareId = req.params.id;
    const share = await controller.getShare(uniqueShareId);
    res.status(200).json(share);
    next();
  });

  shareRoute.post("/share", async (req: Request, res: Response, next: NextFunction) => {

    const { sharingUserId, siteId, cycleId } = req.body;

    try {
      const uniqueId = await controller.addShare(sharingUserId, siteId, cycleId);
      res.status(200).json({
        uniqueId
      });
      next();
    } catch (error) {
      res.status(500).send();
      next();
    }
  });

  return shareRoute;
}