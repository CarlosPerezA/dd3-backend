import { Model, DataTypes } from 'sequelize';

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  winnings: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  score: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class User extends Model {
  static associate() {
    // associate
  }

  static config(sequelize: any) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


export { USER_TABLE, UserSchema, User }
