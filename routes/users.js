const express=require('express');
const router=express.Router();

//register user
router.get('/',(req,res)=>{
  res.send('register a user');
})

module.exports=router;