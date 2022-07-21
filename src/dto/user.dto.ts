import Joi from 'joi';

//const user_id = Joi.string().id();
const user = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().alphanum().min(8);
//const user_word = Joi.string().length(5);
//const accessToken = Joi.string().alphanum();

const createUserDto = Joi.object({
  user: user.required(),
  email: email.required(),
  password: password.required(),
});


export default createUserDto ;
