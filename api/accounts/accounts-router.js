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
});

router.get('/:id', async (req,res)=>{
    const { id }= req.params;
    try{
        const data = await Accounts.getById(id)
        res.status(200).json(data)
    } catch(error){
        res.status(400).json({message:`Error:${error}`})
    }
});

router.post('/', async (req,res)=>{
   try{
       const account  = req.body;
       const data = await Accounts.create(account)
       res.status(200).json(data) 
   } catch(error){
        res.status(400).json({message:`error: ${error}`})
   }
})

router.put('/:id',async (req,res)=>{
    const { id } = req.params;
    const changes = req.body;
    try{
        const data = await Accounts.update( id, changes )
        res.json(data)
    } catch(error){
        res.status(400).json({message:`${error}`})
    }
})

router.delete('/:id', async (req,res)=>{
    const { id } = req.params;
    try{
        const data = await Accounts.remove(id)
        res.json(data)
    } catch(error){
        res.status(400).json({message:`Error deleting post: ${error}`})
    }
})

module.exports = router;
