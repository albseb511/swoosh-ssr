import { useState } from "react";
import Head from "next/head";

const initState = {
    phone: "",
    email: "",
    password: ""
}

export default function Login(){
    const [payload,setPayload] = useState(initState)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( payload )
    }
    const handleChange = e => {
        setPayload({...payload, [e.target.name]:e.target.value })
    }
    return(
        <>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </Head>
        <div className="container-fluid cont">
        <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center justify-items-center py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Register your account!</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-label-group">
                        <label for="inputEmail">Email address</label>
                        <input 
                            type="email" 
                            id="inputEmail" 
                            name="email"
                            value={payload.email} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Email address" 
                            required 
                            autofocus/>
                        </div>
                        <div className="form-label-group">
                        <label for="inputEmail">Phone no</label>
                        <input 
                            type="tel" 
                            id="inputEmail" 
                            name="phone"
                            value={payload.phone} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Phone number" 
                            required 
                            autofocus/>
                        </div>

                        <div className="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input 
                            type="password" 
                            value={payload.password} 
                            onChange={handleChange} 
                            name="password"
                            id="inputPassword" 
                            className="form-control" 
                            placeholder="Password" 
                            required/>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">REGISTER</button>
                        <div className="text-center">
                        <a className="small" href="#">Forgot password?</a></div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <style jsx>
            {`
                :root {
                    --input-padding-x: 1.5rem;
                    --input-padding-y: 0.75rem;
                  }
                  
                  .login,
                  .image {
                    min-height: 100vh;
                  }
                  
                  .bg-image {
                    background-image: url('https://images.unsplash.com/photo-1549271568-e87e07c5406b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
                    background-size: cover;
                    background-position: center;
                  }
                  
                  .login-heading {
                    font-weight: 300;
                  }
                  
                  .btn-login {
                    font-size: 0.9rem;
                    letter-spacing: 0.05rem;
                    padding: 0.75rem 1rem;
                    border-radius: 2rem;
                  }
                  
                  .form-label-group {
                    position: relative;
                    margin-bottom: 1rem;
                  }
                  
                  .form-label-group>input{
                    padding: 0.25rem;
                    padding-left: 1rem;
                    height: auto;
                    border-radius: 2rem;
                  }


                  .form-label-group input::-webkit-input-placeholder {
                    color: transparent;
                  }
                  
                  .form-label-group input:-ms-input-placeholder {
                    color: transparent;
                  }
                  
                  .form-label-group input::-ms-input-placeholder {
                    color: transparent;
                  }
                  
                  .form-label-group input::-moz-placeholder {
                    color: transparent;
                  }
                  
                  .form-label-group input::placeholder {
                    color: transparent;
                  }
                  
                  /* Fallback for Edge
                  -------------------------------------------------- */
                  
                  @supports (-ms-ime-align: auto) {
                    .form-label-group>label {
                      display: none;
                    }
                    .form-label-group input::-ms-input-placeholder {
                      color: #777;
                    }
                  }
                  
                  /* Fallback for IE
                  -------------------------------------------------- */
                  
                  @media all and (-ms-high-contrast: none),
                  (-ms-high-contrast: active) {
                    .form-label-group>label {
                      display: none;
                    }
                    .form-label-group input:-ms-input-placeholder {
                      color: #777;
                    }
                  }
                  
            `}
        </style>
    </>
    )
}

