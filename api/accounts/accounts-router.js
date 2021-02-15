const express = require("express");
const Accounts = require('./accounts-models')
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
    const data = await  Accounts.get()
    res.json(data)
    } catch(error){
        res.status(400).json({message:`${error}`})
    }
})

module.exports = router;