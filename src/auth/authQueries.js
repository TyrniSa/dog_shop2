const getUsers = 'SELECT id, email FROM users';
const emailExists = 'SELECT * from users WHERE email = $1';
const getIdEmail = 'SELECT id, email FROM users WHERE id = $1';
const registerUser = 'INSERT INTO users(email, password) VALUES ($1, $2)';

module.exports = {
  getUsers,
  emailExists,
  getIdEmail,
  registerUser
};