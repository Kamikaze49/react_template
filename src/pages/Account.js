import React, {useState, useEffect} from 'react'
import {withSideBar} from '../components/SideBar';
import icon from "./../images/tokyo-skyline.jpg"
import license from "./../images/largepreview.png"

import Field from "./../components/Field"

function Account() {
    const [multiline, setMultiline] = useState(true)
    useEffect(() =>{
        if(window.innerWidth < 770){
            console.log(multiline)
            return setMultiline(true)
        }else return setMultiline(false)
    })


    return (
        <div className="Page">
             <div className="Header">
                <h2>Account</h2>
            </div>


            <div className="AccountBody">
                 <div className="Left">
                    <div className="iconAndName">
                        <img id="icon" src={icon} />
                        <h4>Pharmacy Name</h4>
                    </div>
                    <div className="details">
                        <Field 
                        name="Email" 
                        width="90%"
                        value="email@email.com" 
                        singleLine={false}/>
                        <Field 
                        name="GPS Coordinates" 
                        width="90%"
                        value="12.24517, 16.255766" 
                        singleLine={false}/>
                    </div>


                 </div>
                 <div className="Right">
                     <div className="BillingInfo">
                        <h2>Visa</h2>
                        <div className="Visa">
                            <div>
                                <Field 
                                name="Card Number" 
                                width="60%"
                                value="0214 5794 1254 1023" 
                                singleLine={multiline}/>
                                <Field 
                                name="CVV" 
                                width="20%"
                                value="123" 
                                singleLine={multiline}/>
                            </div>
                            <div>
                                <Field 
                                name="Card Holder" 
                                width="60%"
                                value="John Doe" 
                                singleLine={multiline}/>
                                <Field 
                                name="Expiry" 
                                width="20%"
                                value="04/22" 
                                singleLine={multiline}/>
                            </div>
                        </div>
                        <h2>Mobile Payment</h2>
                        <div className="MobilePayment">
                        <div>
                                <Field 
                                name="Network" 
                                width="49%"
                                value="0214 5794 1254 1023" 
                                singleLine={multiline}/>
                                <Field 
                                name="Mobile Number" 
                                width="49%"
                                value="123" 
                                singleLine={multiline}/>
                            </div>
                        </div>



                     </div>
                     <div className="License">

                        <div className="LicenseHeader">
                            <h2>License</h2>
                        </div>
                            <img src ={license} />
                     </div>
                 </div>
            </div>


        </div>
    )
}

export default withSideBar(Account);
