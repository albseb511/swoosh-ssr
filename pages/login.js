import { useState } from "react"
import Head from "next/head"
import axios from 'axios';

const initState = {
    email: "",
    password: ""
}

export default function Login(){
  const [payload,setPayload] = useState(initState);
  const [error, setError] = useState(null);
  const [errMessage, setErrMessage] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      setError(null)
      axios.post('http://localhost:3000/api/v1/user/login',payload)
      .then(res=>{
        const { data } = res;
        if(data.success){
          setError(false)
          console.log('authorised', data)
          localStorage.setItem('token',data.token)
          location.assign('/')
        }

        else{
          setErrMessage(res.data.message)
          setError(true)
        }
      })
      .catch(err=>{
        setError(true)
        setErrMessage(err.message)
      })
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
                            <h3 className="login-heading mb-4">Welcome back!</h3>
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
                                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
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
                            background-image: url('https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
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

