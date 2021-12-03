const mongoose = require('mongoose')

const reviews = mongoose.Schema({

    user_id :{
        type: Number
    },

    inmueble_id : {
        type : Number  
    },

    review :{
        type : String
       
    },

    created_at : {
        type: Date,
        default : Date.now

    },

    like : {
        type : Number,
        default :  0.0
    
    },
    dislike : {
        type : Number,
        default :  0.0
    
    }
});


module.exports = mongoose.model('Reviews', reviews);