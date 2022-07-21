import express, { Request, Response, NextFunction } from "express";
import createUserDto  from '../dto/user.dto';
import validateInput from "../middlewares/validate.input";
import Service from "../services/user.services";
const userService = new Service();
const router = express.Router();

router.post('/new',
validateInput(createUserDto, 'body'),
async(req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const newUser = await userService.createPlayer(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

export default router;
