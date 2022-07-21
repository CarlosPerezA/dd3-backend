import express, { Request, Response } from "express";
const router = express.Router();

router.get('/bestPlayers', (_req: Request, res: Response) => {
  res.send("Todo OK!");
});

router.get('/words', (_req: Request, res: Response) => {
  res.send("Todo OK!");
});

export default router;
