const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
         },

    email: {
             type: String,
             requied: true
         },
    password: {
            type:String,
            requied:true
        },
    password_confirmation: {
            type:String,
            required:true
    }    
    },
    
    {
        timestamps: true,
        collection: 'users'
    }
  )

  module.exports = mongoose.model('User', userSchema);