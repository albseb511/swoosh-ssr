

export const authChecker = handler => (req, res) => {

    if ( req.method === 'POST' ){

        let { email, username, password } = req.body;
        if( !email ){
            return res.status(406).json({
                message: 'email is not valid',
                is_error: true
            })
        } else if( !username ){
            return res.status(406).json({
                message: 'username is not valid',
                is_error: true
            })
        } else if( !password ){
            return res.status(406).json({
                message: 'password is not valid',
                is_error: true
            })
        } else if( password.length<6 ){
            return res.status(406).json({
                message: 'password length should be minimum 6',
                is_error: true
            })
        }

        return handler( req, res )
    }
    else{
        res.status(405).json({message: 'method not allowed', is_error: true});
    }

}