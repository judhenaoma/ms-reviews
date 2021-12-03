require('dotenv').config({ path: '.env' });
const express = require("express");
const app = express();
const reviewsRoutes = require("./routes/reviews.js");
const mongoose = require("mongoose");



// middlewares
app.use(express.json());
app.use(reviewsRoutes);



const port = process.env.PORT || 3000;


mongoose
.connect(process.env.MONGODB_URI)

.then(()=>{
    console.log("La conexión se ha establecido")
})
.catch((err)=>{
    console.log(`Ha sido fallida la conexión a la base de datos. El error es ${err}`)
})




app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`)
})
