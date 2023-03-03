require('dotenv').config();
const express = require('express');
const app = express();
const { PORT, CLIENT_URL } = require('./config.js');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');

//import middleware
require('./src/middleware/passportMiddleware');

//initialize middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

//import routes
const productRoutes = require('./src/product/productRoutes');
const authRoutes = require('./src/auth/authRoutes');

//initialize routes
app.get("/", (req,res) => {res.send("Welcome to dog app!")});
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

//app listen
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));