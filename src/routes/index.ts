import express from 'express';
import { Express } from 'express-serve-static-core';
import userRouter from './user.routes';
import scoreRouter from './score.routes';
import gameRouter from './game.routes';

function routerApi(app: Express) {
  const router = express.Router();
  app.use('/api/v1/wordle', router);
  router.use('/user', userRouter);
  router.use('/score', scoreRouter);
  router.use('/game', gameRouter)
}

export default routerApi;
