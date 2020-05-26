import mongoose, { Query, connection } from 'mongoose'
import User from '../../../../models/user'
import dbConnect from '../../../../utils/dbConnect';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { authChecker } from '../../../../middlewares/helpers/auth'

console.log('connecting')
dbConnect();

async function register (req, res) {
    const { email, phone, password } = req.body;
    
    console.log(req.body)

    try{
        const users = await User.find().where('email',[email])
        console.log(users)
        if(users.length!==0){
            res.status(200).json({
                success: false,
                message: 'email-id already exists!'
            })
            return
        }

        const pass = await bcrypt.hash(password, 10)
        const payload = { email, phone, password: pass }
        User.create(payload,(err,data)=>{
            if(err){
                res.status(500).message({
                    success: false,
                    message: 'Failed to create user!'
                })
            }
            res.status(201).json({
                success: true,
                email: data.email,
                username: data.username
            })
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Oops something went wrong!"
        })
    }
    finally{
        console.log('register api end')
    }
    
}

export default authChecker( register )

