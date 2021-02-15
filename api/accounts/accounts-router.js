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

router.get('/:id', async (req,res)=>{
    const {id}= req.params;
    try{
        const data = await Accounts.getById(id)
        res.status(200).json(data)
    } catch(error){
        res.status(400).json({message:`Error:${error}`})
    }
})

module.exports = router;