import mongoose, { Query, connection } from 'mongoose'
import User from '../../../../models/user'
import dbConnect from '../../../../utils/dbConnect';
import bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';

console.log('connecting')
dbConnect();

async function validate (req, res) {
    try{
        const token = req.headers.authorization
        let decoded = verify( token, 'abcd' )
        console.log(decoded)
        
        let results = await User.find().where('email',[decoded.email])
        console.log(results)
        if(results.length!==1){
            res.status(401).json({
                success: false,
                message: "Invalid token"
            })
            return
        }

        res.status(200).json({
            success: true,
            token
        })
    } catch(err){

        switch(err.name){
            case "TokenExpiredError":
                res.status(401).json({
                    success: false,
                    message: "Token expired!",
                    error_message: err.message
                })
                break
            case "JsonWebTokenError":
                res.status(401).json({
                    success: false,
                    message: "Token error!"
                })
                break
            default:
                res.status(401).json({
                    success: false,
                    message: "Validation failed!"
                })
        }

    }
    
}

export default validate

