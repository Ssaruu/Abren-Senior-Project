const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(

    {
        // id : {
        //     type: Number
        // },
        Firstname: {
            type: String, 
            //required: [true, 'please enter your name']
        }, 
        Lastname: {
            type: String
        },
        email: {
            type: String
        }, 
        username: {
            type: String

        },
        password: {
            type: String
        }, 
        role: {
            type: String
        }

    }, 
    {
        timestamps: true
    }
  
)
const user= mongoose.model('user', UserSchema);
module.exports = user;