import mongoose from 'mongoose';
const { Schema } = mongoose;

let count = 0

delete mongoose.model['User']

const UserSchema = mongoose.model('User',new Schema({
    name:{
        type: String,
        min:6,
        max:255,
        default: ""
    },
    email:{
        type:String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type:String,
        required: true,
        max: 1024,
        min:6
    },
    phone:{
        type:String,
        required:true,
        max:10,
        min:10
    },
    swoosh_handle:{
        type:String,
        max:255,
        min:6
    },
    swoosh_level:{
        type:String,
        default:"noob"
    },
    date:{
        type: Date,
        default: Date.now
    },
    profile_url:{
        type:String,
        default: null
    },
    thumbnail:{
        type:String,
        default: null
    },
    reviews:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    },
    bookings:{
        type:Array,
        default:[]
    },
    favorites:{
        type:Array,
        default:[]
    },
    photos:{
        type:Array,
        default:[]
    }
}))

console.log('count is',++count)

export default UserSchema