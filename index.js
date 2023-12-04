
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT 
const userRouter = require('./router/users');  // Corrected the variable name

require('dotenv').config();

app.use(express.json());

// Corrected the path to the users configuration file
require('./schema/users');

app.use('/user', userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
