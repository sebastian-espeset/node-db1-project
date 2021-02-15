const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    try{
        Accounts.get()
    } catch(error){
        res.status(400).json({message:`${error}`})
    }
})

module.exports = router;