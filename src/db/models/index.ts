import { User, UserSchema } from './user.model';
import { Words, WordSchema } from './words.model';

function setupModels(sequelize: any) {
  User.init(UserSchema, User.config(sequelize));
  Words.init(WordSchema, Words.config(sequelize))
}

export default setupModels;
