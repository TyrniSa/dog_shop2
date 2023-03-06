const pool = require('../../db');
const queries = require('../queries/authQueries');
const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const {SECRET} = require('../../config');

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows);
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { email } = req.body;

  pool.query(queries.getUserById, [id], (error, results) =>{
    const noUser = !results.rows.length;
    if(noUser){
      res.send("No user found with this id, could not update user email");
    } else {
    pool.query(queries.updateUser, [email, id], (error,results) => {
      if(error) throw error;
      res.status(200).send('User email Updated');
    });
  }
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) =>{
    const noUser = !results.rows.length;
    if(noUser){
      res.send("No user found with this id, could not remove user");
    } else {
    pool.query(queries.deleteUser, [id], (error,results) => {
      if(error) throw error;
      res.status(200).send('User removed');
    });
  }
  });
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  //hash password
    const hashedPassword = await hash(password, 10);
  //add user to db
    await pool.query(queries.registerUser, [email, hashedPassword], (error, results) =>{
      if(error) throw error;

      res.status(201).json({
        success: true,
        message: 'User created'
      });
    });
};

const loginUser = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.id,
    email: user.email
  };

  try {
    const token = await sign(payload, SECRET);
    return res.status(200)
    .cookie('token', token, {
      httpOnly: true
    })
    .json({
      success: true,
      message: 'Login succesful'
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    });
  }
};

const logoutUser = async (req,res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logout succesful'
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    });
  }
};

const getProtected = (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  logoutUser,
  getProtected
};