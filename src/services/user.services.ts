import sequelize from '../libs/sequelize';
import { DataUser } from './services.types';
import bcrypt from 'bcrypt';

class userService{
  constructor(){}

 async createPlayer(dataUser: DataUser){
    const hashPass = await bcrypt.hash(dataUser.password, 10);
    const newUser = ({
      ...dataUser,
      password : hashPass
    })
    const save = await sequelize.query('');
    console.log(save);
    return newUser;
  }

  findByPlayer(){

  }

  updatePlayer(){

  }

  token(){

  }

}


export default userService;
