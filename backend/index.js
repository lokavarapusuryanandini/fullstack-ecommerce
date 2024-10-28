import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import router from './routes/index.js';
import { config } from 'dotenv';

config();

const app = express();
app.use(cors({
  origin : process.env.FRONTEND_URL,
  credentials : true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api',router);

const PORT = process.env.PORT || 8080;

connectDB().then(()=>{

  app.listen(PORT,()=>{
    console.log('connnect to DB');
    console.log('Server is running '+PORT);
  });
});
