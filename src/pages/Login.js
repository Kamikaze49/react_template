import React, {useState, useContext} from 'react'
import { Link, useHistory } from "react-router-dom"
import {db, auth, storage} from "./../firebase"

import userContext from "./../contexts/UserContext";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useHistory()
    const [user, setUser] = useContext(userContext)

    const login = () => {
        setError(null)
        auth.signInWithEmailAndPassword(email, password)
        .catch(e =>{
            setError(e.message)
        })

        auth.onAuthStateChanged(account =>{
            console.log(account.uid)
            console.log(user)

            db.collection("users").doc(account.uid).get()
            .then(doc =>{
                if(doc.exists){
                    console.log(doc.data())
                    let userData = doc.data()
                    setUser({...userData, id:account.uid})
                    history.push("/")
                }else{
                    setError("User data not found")
                }
                
            }).catch(e =>{
                setError("Error retrieving user data")
            })



        })
        


    }

    return (
        <div className="Login">
            <div className="Header">
                <h2>Pharma</h2>
            </div>

            <div className="LoginContainer">
                <p className="error">{error}</p>
                <div className="LoginHeader">
                    <h2>Login</h2>
                </div>

                <div className="LoginInputs">
                    <input type="text" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                </div>

                <button onClick={()=>login()} >Login</button>
                <p>Don't have an Account? <Link to="/SignUp">Sign Up</Link></p>
            </div>


        </div>
    )
}

export default Login
