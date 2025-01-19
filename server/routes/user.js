import express, { response } from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.get ("/", (req,res)=> {
   const {username, password} = req.query
   console.log(username)
   console.log(password)
  
    db.query ("SELECT * FROM users WHERE username= ? AND password= ?", [username, password], (err,result)=> {
      if (err) {
        console.log ("Error in Finding User:", err)
        res.status(500).send("error in the Query")
      }   
      else
      console.log (result)
        res.send (result)
    })
  })

  export default Router;