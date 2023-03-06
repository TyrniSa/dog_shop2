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
const productRoutes = require('./src/routes/productRoutes');
const authRoutes = require('./src/routes/authRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

//initialize routes
app.get("/", (req,res) => {res.send("Welcome to dog app!")});
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/carts', cartRoutes);

//app listen
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));