import mongoose, { Query, connection } from 'mongoose'
import User from '../../../../models/user'
import dbConnect from '../../../../utils/dbConnect';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { authChecker } from '../../../../middlewares/helpers/auth'

console.log('connecting')
dbConnect();

async function login (req, res) {
    const { email, password } = req.body;
    
    console.log(req.body)

    try{
        const users = await User.find().where('email',[email])
        console.log(users)
        if(users.length===0){
            res.status(401).json({
                success: false,
                message: 'credentials does not match!'
            })
            return
        }

        const match = await bcrypt.compare(password, users[0].password)
        if(match){
            console.log('match')
            const { email, username, role } = users[0]
            const token = sign({ email, username, role }, 'abcd', { expiresIn: '7d' } )
            res.status(200).json({
                success: true,
                email: users[0].email,
                username: users[0].username,
                token
            })
        }
        else{
            console.log('unauth')
            res.status(401).json({
                success: false,
                message: 'credentials are invalid!'
            })
        }

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

export default login
