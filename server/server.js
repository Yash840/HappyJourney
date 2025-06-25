import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import schedulesRouter from './routes/schedules.js'
import userRouter from './routes/user.js'

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin : 'http://localhost:5173',
  credentials : true
}))

app.use('/api/schedules', schedulesRouter);
app.use('/api/users', userRouter);

app.get('/api', (req,res) => {
  res.send("Welcome to HappyJourney API");
})

app.listen(PORT, () => {
  console.log(`Server Is Listening at http://localhost:${PORT}`);
})


