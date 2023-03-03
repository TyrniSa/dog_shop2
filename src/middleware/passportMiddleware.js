const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { SECRET } = require('../../config');
const db = require('../../db');
const queries = require('../auth/authQueries');

const cookeExtractor = function (req) {
  let token = null;
  if(req && req.cookies) token = req.cookies['token']
  return token;
}

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookeExtractor,
}

passport.use(
  new Strategy(opts, async({ id }, done) => {
    try{
      const { rows } = await db.query(queries.getIdEmail, [id]);

      if(!rows.length){
        throw new Error('401 not authorized')
      }

      let user = { id: rows[0].id, email: rows[0].email };
      return await done(null, user);
    } catch(error){
      console.log(error.message);
      done(null, false);
    }
  })
);