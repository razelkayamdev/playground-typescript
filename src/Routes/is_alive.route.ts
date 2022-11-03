import { Router } from "express";

export const isAliveRoute = Router();

isAliveRoute.get("/is_alive", async (req, res, next) => {
  res.status(200).json({
      alive: true
    });
});