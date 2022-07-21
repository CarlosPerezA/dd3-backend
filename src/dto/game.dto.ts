import Joi from 'joi';


const user = Joi.string().min(3);
const user_word = Joi.string().length(5);
//const accessToken = Joi.string().alphanum();

const newGameDto = Joi.object({
  user: user.required(),
  user_word: user_word.required(),

});


export default newGameDto ;
