const getUsers = 'SELECT id, email FROM users';
const getUserById = 'SELECT id, email FROM users WHERE id = $1';
const emailExists = 'SELECT * from users WHERE email = $1';
const getIdEmail = 'SELECT id, email FROM users WHERE id = $1';
const registerUser = 'INSERT INTO users(email, password) VALUES ($1, $2)';
const deleteUser = 'DELETE FROM users WHERE id = $1';
const updateUser = 'UPDATE users SET email = $1 WHERE id = $2';

module.exports = {
  getUsers,
  getUserById,
  emailExists,
  getIdEmail,
  registerUser,
  deleteUser,
  updateUser
};