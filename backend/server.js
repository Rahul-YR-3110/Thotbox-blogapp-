const express=require('express');
const cors=require('cors');
const authenticate=require('./middleware/authMiddleware');
require('dotenv').config();
const mongoConnection = require('./mongo');
const app=express();
const thotRouter = require('./routes/thot');
const authRouter=require('./routes/auth');
app.use(express.json()); 

app.use(cors( {
  origin:'https://thotbox-wheat.vercel.app',
  credentials:true
}))

app.use('/thots',authenticate,thotRouter);
app.use('/auth',authRouter);

const PORT=process.env.PORT||3000
mongoConnection();

app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
});
