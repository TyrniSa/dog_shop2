require('dotenv').config();
const express = require('express');
const productRoutes = require('./src/product/routes');

const app = express();
const { PORT } = require('./config.js');

app.use(express.json());

app.get("/", (req,res) => {
  res.send("Welcome to dog app!")
})

app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));