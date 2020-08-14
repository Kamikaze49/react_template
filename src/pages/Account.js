import React, {useState, useEffect, useContext} from 'react'
import {withSideBar} from '../components/SideBar';
import icon from "./../images/tokyo-skyline.jpg"
import license from "./../images/largepreview.png"
import userContext from "./../contexts/UserContext"
import Field from "./../components/Field"

function Account() {
    const [user, setUser] = useContext(userContext)
    return (
        <div className="Page">
             <div className="Header">
                <h2>Account</h2>
            </div>

            <div className="AccountBody">
                 <div className="Left">
                    <div className="iconAndName">
                        <img id="icon" src={user.hospital_image_url || null} alt ="pharmacy icon"/>
                        <h4>{user.pharmacy_name}</h4>
                    </div>
                    <div className="details">
                        <Field 
                        name="Email" 
                        width="90%"
                        value={user.email} 
                        singleLine={false}/>
                        <Field 
                        name="GPS Coordinates" 
                        width="90%"
                        value={`${user.geolocation.lng}, ${user.geolocation.lat}`} 
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
                                value={user.card_number} 
                                singleLine={true}/>
                                <Field 
                                name="CVV" 
                                width="20%"
                                value={user.cvv} 
                                singleLine={true}/>
                            </div>
                            <div>
                                <Field 
                                name="Card Holder" 
                                width="60%"
                                value={user.card_holder} 
                                singleLine={true}/>
                                <Field 
                                name="Expiry" 
                                width="20%"
                                value={user.expiry}
                                singleLine={true}/>
                            </div>
                        </div>
                        <h2>Mobile Payment</h2>
                        <div className="MobilePayment">
                        <div>
                                <Field 
                                name="Network" 
                                width="49%"
                                value={user.network} 
                                singleLine={true}/>
                                <Field 
                                name="Mobile Number" 
                                width="49%"
                                value={user.mobile_number}
                                singleLine={true}/>
                            </div>
                        </div>



                     </div>
                     <div className="License">

                        <div className="LicenseHeader">
                            <h2>License</h2>
                        </div>
                            <img src={user.license_url || null} alt ="licence" />
                     </div>
                 </div>
            </div>


        </div>
    )
}

export default withSideBar(Account);
