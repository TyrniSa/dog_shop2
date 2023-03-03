const { check } = require('express-validator');
const db = require('../../db');
const queries = require('./authQueries');
const bc = require('bcryptjs');

//password
const password = check('password').isLength({min: 6, max: 15})
.withMessage('Password needs to be between 6 and 15 characters.');

//email
const email = check('email').isEmail()
.withMessage('Please provide a valid email.');

//check if email exists
const emailExists = check('email').custom(async (email) => {
  const {rows} = await db.query(queries.emailExists, [email]);

  if(rows.length){
    throw new Error('Email already exists.');
  }
});

//login validation
const loginFields = check('email').custom(async (email, { req }) => {
  const user = await db.query(queries.emailExists, [email])
  if(!user.rows.length){
    throw new Error('Email does not exist.');
  };

  const validPassword = await bc.compare(req.body.password, user.rows[0].password);
  if(!validPassword){
    throw new Error('Wrong password.');
  };

  req.user = user.rows[0];

});

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFields],
}