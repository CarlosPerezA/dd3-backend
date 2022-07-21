import { Model, DataTypes } from 'sequelize';

const WORDS_TABLE = 'words';

const WordSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  word: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  hits: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class Words extends Model {
  static associate() {
    // associate
  }

  static config(sequelize: any) {
    return {
      sequelize,
      tableName: WORDS_TABLE,
      modelName: 'words',
      timestamps: false
    }
  }
}


export { WORDS_TABLE, WordSchema, Words }
