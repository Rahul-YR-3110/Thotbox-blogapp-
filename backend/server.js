const express=require("express");
require('dotenv').config();
const mongoConnection = require('./mongo');
const app=express();
const thotRouter = require('./routes/thot');
const authRouter=require('./routes/auth');
app.use(express.json()); 

app.use('/thots',thotRouter);
app.use('/auth',authRouter);

const PORT=process.env.PORT||3000
mongoConnection();

app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
});
