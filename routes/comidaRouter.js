const express = require('express')
const router = express.Router()

router.get('/comida', (req,res)=>{
    return res.json({mensaje:"Si Jalo, sin comida"})
})

module.exports= router