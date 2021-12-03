const { Router } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const reviews = require("../models/reviews.js")


router.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    
    res.send(`<h2>Microservicio 2 - API REST - Reseñas grupo 3 p27</h2>
    <h5>Los endpoints de esta aplicación son:</h5> 
    <ul>
    <li>/reviews/ __ Crear reseñas</li>
    <li>/reviews/:inmueble_id __ Recuperar las reseñas de con un inmueble dada</li>
    </ul>`)
})


// Using async/await
router.post('/reviews', async (req, res)=>{
    const review_ = reviews(req.body)
    try{
        data = await review_.save()
        res.json(data)
    }catch(err){
        res.json({error: `Ha ocurrido el error ${err}`})
    }
})

// Using .then / .catch
router.get('/reviews/:inmueble_id', (req, res)=>{
    reviews.find({inmueble_id : req.params.inmueble_id})
    .then((data)=>{ res.json(data) })
    .catch((err)=> { res.json({error : `${err}`})})
})


module.exports = router;