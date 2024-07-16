const express = require('express')
const router = express.Router()
const user = require("../models/user")

router.post("/register",async(req,res) =>
{ 
  const {username,password} = req.body
  if(username && password)
  {
    try {
      
      
      const newUser = new user({username:username,password:password})
      await newUser.save()
      res.status(200).json({status:"new user cresated"})
      } catch (error) {
          
        res.status(400).json({status:"some thibg went wrong"})
      }
  }
  else
  {
    res.status(400).json({status:"somtehsj"})


  }

   
   
})
router.get("/getuser",async(req,res) =>
    {
        try {
          const userData = await user.find({})
          res.json(userData).status(200)

        } catch (error) {
            
          res.json({status:"some thibg went wrong"}).status(400)
        }
    })
    

    router.get("/getuser/:id",async(req,res) =>
        {
            try {
              const userData = await user.findOne({_id:req.params.id})
              res.json(userData).status(200)
    
            } catch (error) {
                
              res.json({status:"some thibg went wrong"}).status(400)
            }
        })
router.post("/login",async(req,res) =>
{
  
const userExist =  await user.findOne({username:req.body.username})
if(!userExist)
{ 
    res.json({status:"user not found"}).status(400)
}
const passwordCheck = await user.findOne({password:req.body.password})
if(passwordCheck) 
{
    res.json({status:"welconome"})
}
else
{
    res.json({status:"password or username incorrect"})
}
})
   
         

module.exports = router