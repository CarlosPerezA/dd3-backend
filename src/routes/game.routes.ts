import express, { NextFunction, Request, Response } from 'express';
import newGameDto from '../dto/game.dto';
import validatorHandler from '../middlewares/validate.input';
const router = express.Router();
import service from '../services/game.services';

const gameService = new service();

router.post('/new',
validatorHandler(newGameDto, 'body'),
async (req: Request, res: Response, next: NextFunction) => {
  try {
   const startGame = gameService.wordUser(req.body.user_word);
   res.json(startGame);
  } catch (error) {
    next(error);
  }
});


export default router;
