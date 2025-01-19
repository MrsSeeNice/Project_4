import express from 'express'
import userRouts from './routes/user.js'
import cors from 'cors'


const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use ('/user', userRouts) ;app.get ('/', (req, res )=> {
  res.send ("Welcome to Favorite Colors")
})

app.listen ('3002', ()=> {
  console.log ("Server is Running on Port 3002")
})