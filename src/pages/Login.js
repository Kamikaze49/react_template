import React from 'react'
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="Login">
            <div className="Header">
                <h2>Pharma</h2>
            </div>

            <div className="LoginContainer">
                <div className="LoginHeader">
                    <h2>Login</h2>
                </div>

                <div className="LoginInputs">
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="password" placeholder="Password"/>
                </div>

                <button>Login</button>
                <p>Don't have an Account? <Link to="/SignUp">Sign Up</Link></p>
            </div>


        </div>
    )
}

export default Login
