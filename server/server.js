import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
// import { searchOperator } from './controllers/search.js'
// import schedulesRouter from './routes/schedules.js'
import Schedule from './models/schedule.model.js'

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

app.get('/api', (req,res) => {
  res.send("Welcome to HappyJourney API");
})

// app.use('/api/schedules', schedulesRouter)

app.get('/api/opr',async (req, res) => {
  const opr = await searchOperator('golden@express.com')
  res.send(opr);
})


app.listen(PORT, () => {
  console.log(`Server Is Listening at http://localhost:${PORT}`);
})


