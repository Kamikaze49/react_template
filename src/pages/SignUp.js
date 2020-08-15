import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {db, storage, auth} from "./../firebase"

function Login() {
    const storageRef = storage.ref()

    const [sodShow, setSodShow] = useState(true)
    const [billingInfoShow, setBillingInfoShow] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    const [userData, setUserData] = useState({
        pharmacy_name:"",
        email:"",
        phone_number:"",
        password:"",
        confirm_password:"",
        geolocation:{},
        card_number:null,
        cvv:null,
        card_holder:"",
        expiry:"",
        network:"",
        mobile_number:"",
        license:null,
        hospital_image:null,
        isVerified:false
    })

    const [suErrorMessage, setSuErrorMessage] = useState(null)
    const [biErrorMessage, setBiErrorMessage] = useState(null)

    const dataSetter = e =>{
        let tempdata = userData
        let property = e.target.name
        tempdata[property] = e.target.value
        console.log(tempdata)
        setUserData(tempdata)

    }

    const coordinateSetter = () =>{
        navigator.geolocation.getCurrentPosition(position => {
            let newCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            let tempdata = userData
            tempdata = {...tempdata, geolocation:newCoords}
            setUserData(tempdata)
        })
    }

    const fileSetter = e =>{
        let tempdata = userData
        tempdata[e.target.name] = e.target.files[0]
    }


    const switchPage = () => {
        setSodShow(!sodShow)
        setBillingInfoShow(!billingInfoShow)
    }

    const submitData = async () =>{ 

        const licenseRef = storageRef.child(`license_${Date.now()}`)
        const hospital_imageRef = storageRef.child(`hospital_image_${Date.now()}`)

        await licenseRef.put(userData.license)
        const license_url = await licenseRef.getDownloadURL()

        await hospital_imageRef.put(userData.hospital_image)
        const hospital_image_url = await hospital_imageRef.getDownloadURL()

        console.log(license_url)
        console.log(hospital_image_url)

        await auth.createUserWithEmailAndPassword(userData.email, userData.password)
        auth.onAuthStateChanged((user) =>{
            if(user){
                db.collection("users").doc(user.uid).set({
                    pharmacy_name: userData.pharmacy_name,
                    email: userData.email,
                    geolocation: userData.geolocation,
                    card_number: userData.card_number,
                    cvv: userData.cvv,
                    card_holder: userData.card_holder,
                    expiry: userData.expiry,
                    network: userData.network,
                    mobile_number: userData.mobile_number,
                    license_url: license_url,
                    hospital_image_url: hospital_image_url,
                    isVerified:false
                })

            }else{
                setBiErrorMessage("Sign Up Failed")
                window.scrollTo(0, 0)
            }


        })



    }


    const validateSignUp = () =>{
        const {pharmacy_name, email, password, confirm_password, phone_number, geolocation, license, hospital_image} = userData

        if(pharmacy_name == ""){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Pharmacy name is required")
            
        }else if(email == "" || !email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) ){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Email is required")
        }else if(password == ""){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Password is required")
        }else if(confirm_password == ""){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Please confirm password")
        }else if(password !== confirm_password){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Passwords do not match")
        }else if(phone_number == "" ||  !phone_number.match(/^\+?\d+$/) ){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Incorrect value entered for phone number")
        }else if(geolocation == null){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Please click Get Coordinates to receive coordinates")
        }else if(license == null){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Please select a license image")
        }else if(hospital_image == null){
            window.scrollTo(0, 0)
            return setSuErrorMessage("Please select a hospital image")
        }

        setSuErrorMessage(null)
        switchPage()
    }

    const validateBilling = () =>{
        const { card_holder, card_number, cvv, expiry, network, mobile_number } = userData


        submitData()
        setBillingInfoShow(false)
        setModalShow(true)
    }

    return (
        <div className="SignUp">
            <div className="Header">
                <h2>Pharma</h2>
            </div>

            <div className={sodShow?"SignUpContainer":"SignUpContainer divHide"}>
                <div className="LoginHeader">
                    <p className={suErrorMessage?"error":"divHide"}>
                        <h2>Error!</h2>
                        <p>{suErrorMessage}</p>
                    </p>
                    <h2>Sign Up</h2>
                </div>

                <div className="SignUpInputs">
                    <input type="text" name="pharmacy_name" id="pharmacyName" onChange={e=>dataSetter(e)} placeholder="Pharmacy Name"/>
                    
                    <section className="halfWidthInputs">
                        <input type="text" name="email" id="pharmacyEmail" onChange={e=>dataSetter(e)} placeholder="Email"/>
                        <input type="text" name="phone_number" id="phoneNum" onChange={e=>dataSetter(e)} placeholder="Phone Number"/>
                    </section>

                    <section className="halfWidthInputs">
                        <input type="password" name="password" id="password" onChange={e=>dataSetter(e)} placeholder="Password"/>
                        <input type="password" name="confirm_password" id="confirmPassword" onChange={e=>dataSetter(e)} placeholder="Confirm Password"/>
                    </section>

                    <section className="GPS">
                        <button id="getCoords" onClick={()=> coordinateSetter()}>Get Coordinates</button>
                        <input type="text"
                         name="coordinates" 
                         id="coordinates" 
                         value={userData.geolocation.lat&&userData.geolocation.lng?`${userData.geolocation.lat}, ${userData.geolocation.lng}`:`latitude, longitude`} 
                         placeholder="Lat, long" 
                         disabled={true}/>
                    </section>

                    <input type="file" name="license" onChange={e => fileSetter(e)} placeholder="Hospital License"/>
                    <input type="file" name="hospital_image" onChange={e => fileSetter(e)} placeholder="Hospital Image"/>
                
                
                
                
                
                </div>

                <button className="next" onClick={() => validateSignUp()} >Next</button>
                <p>Already have an Account? <Link to="/SignIn">Sign In</Link></p>
            </div>





            <div className={billingInfoShow?"BillingContainer":"BillingContainer divHide"}>
                <div className="LoginHeader">
                    <p className="BIback" onClick={()=> switchPage()}>Back</p>
                    <p className={biErrorMessage?"error":"divHide"}>{biErrorMessage}</p>
                    <h2>Billing Info</h2>
                </div>

                <div className="SignUpInputs">
                    
                    <section>
                        <h3>Visa Card</h3>
                        <input type="text" name="card_number" id="cardNo" onChange={e=>dataSetter(e)} placeholder="Card Number"/>
                        <input type="text" name="cvv" id="cvv" onChange={e=>dataSetter(e)} placeholder="CVV"/>
                    </section>
                    <section>
                        <input type="text" name="card_holder" id="cardHolder" onChange={e=>dataSetter(e)} placeholder="Card Holder"/>
                        <input type="text" name="expiry" id="expiry" onChange={e=>dataSetter(e)} placeholder="Expiry"/>
                    </section>

                    <section className=" Mobile">
                        <h3>Mobile Payment</h3>
                        <input type="text" name="mobile_number" id="mobileNumber" onChange={e=>dataSetter(e)} placeholder="Mobile Number"/>
                    </section>
                
                </div>

                <button className="next" onClick={() => validateBilling()}>Create Account</button>
                <p>Already have an Account? <Link to="/SignIn">Sign In</Link></p>
            </div>

            <div className={modalShow?"Modal":"Modal divHide"}>
                <div className="ModalContent ">
                    <div>
                        <h2>Sign Up in progress</h2>
                        <p>Please wait while your account is verified.</p>
                    </div>

                    <Link style={{ color:"#fff"}} to="/SignIn"><button id="toSignIn">Ok</button></Link>
                </div>
            </div>


        </div>
    )
}

export default Login
