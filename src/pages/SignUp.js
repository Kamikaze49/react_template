import React from 'react'
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="SignUp">
            <div className="Header">
                <h2>Pharma</h2>
            </div>

            <div className="SignUpContainer">
                <div className="LoginHeader">
                    <h2>Sign Up</h2>
                </div>

                <div className="SignUpInputs">
                    <input type="text" name="pharmacyName" id="pharmacyName" placeholder="Pharmacy Name"/>
                    
                    <section className="halfWidthInputs">
                        <input type="text" name="pharmacyEmail" id="pharmacyEmail" placeholder="Email"/>
                        <input type="text" name="phoneNum" id="phoneNum" placeholder="Phone Number"/>
                    </section>

                    <section className="halfWidthInputs">
                        <input type="text" name="password" id="password" placeholder="Password"/>
                        <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
                    </section>

                    <section className="GPS">
                        <button id="getCoords">Get Coordinates</button>
                        <input type="text" name="coordinates" id="coordinates" placeholder="Lat, long" disabled="true"/>
                    </section>

                    <input type="file" placeholder="Hospital License"/>
                    <input type="file" placeholder="Hospital Image"/>

                
                
                
                
                
                
                </div>

                <button className="next">Next</button>
                <p>Already have an Account? <Link to="/SignIn">Sign In</Link></p>
            </div>





            <div className="BillingContainer">
                <div className="LoginHeader">
                    <h2>Billing Info</h2>
                </div>

                <div className="SignUpInputs">
                    
                    <section>
                        <h3>Visa Card</h3>
                        <input type="text" name="cardNo" id="cardNo" placeholder="Card Number"/>
                        <input type="text" name="cvv" id="cvv" placeholder="CVV"/>
                    </section>
                    <section>
                        <input type="text" name="cardHolder" id="cardHolder" placeholder="Card Holder"/>
                        <input type="text" name="expiry" id="expiry" placeholder="Expiry"/>
                    </section>

                    <section className="halfWidthInputs Mobile">
                        <h3>Mobile Payment</h3>
                        <input type="text" name="network" id="network" placeholder="Network"/>
                        <input type="text" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number"/>
                    </section>
                
                </div>

                <button className="next">Create Account</button>
                <p>Already have an Account? <Link to="/SignIn">Sign In</Link></p>
            </div>


        </div>
    )
}

export default Login
