import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.get ("/", (req,res)=> {
    db.query ("SELECT * FROM favoritecolors.users WHERE username= 'alice' AND password= 123git add", (err,result)=> {
      if (err) {
        console.log ("Error in Finding User:", err)
        res.status(500).send("error in the Query")
      }   
      else
        res.send (result)
    })
  })

  export default Router;