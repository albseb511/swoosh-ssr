

export const authChecker = handler => (req, res) => {

    if ( req.method === 'POST' ){

        let { email, phone, password } = req.body;
        if( !email ){
            return res.status(200).json({
                message: 'email is not valid',
                success: false
            })
        } else if( !phone ){
            return res.status(200).json({
                message: 'phone is not valid',
                success: false
            })
        } else if( !password ){
            return res.status(200).json({
                message: 'password is not valid',
                success: false
            })
        } else if( password.length<6 ){
            return res.status(200).json({
                message: 'password length should be minimum 6',
                success: false
            })
        }

        return handler( req, res )
    }
    else{
        res.status(405).json({message: 'method not allowed', is_error: true});
    }

}