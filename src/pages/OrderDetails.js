import React from 'react'
import {withSideBar} from '../components/SideBar';
import {useParams} from "react-router-dom"
import Drug from "./../components/Drug"

function OrderDetails() {
    const {id} = useParams() 

    return (
        <div className="Page">
            <div className="Header">
            <h2>Order {id}</h2>
            </div>
            <div className="OrderDetailsContent">
                <div className="DPdetails">
                    <div className="DoctorDetails">
                        <div className="Header">
                            <h3>Doctor Details</h3>
                        </div>
                        <div className="DoctorDetailsContent">
                            <p><span>Name: </span>John Doe</p>
                            <p><span>Hospital: </span>Rokcare Hospital</p>
                            <p><span>Date of Issue: </span>14-05-2020</p>
                        </div>
                    </div>

                    <div className="PatientDetails">
                        <div className="Header">
                            <h3>Patient Details</h3>
                        </div>
                        <div className="PatientDetailsContent">
                            <div className="pdb1">
                            <p><span>Patient ID: </span>r32g3fww54</p>
                            <p><span>Age: </span>41</p>
                            <p><span>weight: </span>75Kg</p>
                            </div>
                            <div>
                                <p><span>Description: </span>Una volta che avrai
                                Spiccato il volo, deciderai
                                Sguardo verso il ciel saprai:
                                Lì a casa il cuore sentirai.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="DrugDetails">
                    <div className="Header">
                        <h3>Drug Details</h3>
                        <div>
                            <label>Consent to having all drugs</label>
                            <input type="checkbox" name="drug_consent" id="drugConsent"/>
                        </div>
                    </div>
                    <div className="Drugs">
                        <Drug/>
                        <Drug/>
                        <Drug/>
                        <Drug/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withSideBar(OrderDetails)
