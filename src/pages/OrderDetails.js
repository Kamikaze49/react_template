import React, {useState, useContext, useEffect} from 'react'
import {withSideBar} from '../components/SideBar';
import {useParams} from "react-router-dom"
import Drug from "./../components/Drug"
import OrderContext, {OrderProvider} from "./../contexts/OrderContext";

function OrderDetails(props) {
    const {id} = useParams() 
    const [currentOrder, setCurrentOrder] = useState({
        id:"",
        doctor_name:"",
        hospital:"",
        date_of_issue:"",
        pharmacies:[{drugs:[]}],
        patient_id:"",
        patient_age:null,
        patient_weight:null,
        diagnosis:""
    })
    const order = useContext(OrderContext)


    useEffect(()=>{
        order.forEach(item=>{
            console.log(item)
            if(item.id === id)setCurrentOrder(item)
        })

    }, [])


    return (
        <div className="Page">
            <div className="Header">
            <h2>Order {currentOrder.id}</h2>
            </div>
            <div className="OrderDetailsContent">
                <div className="DPdetails">
                    <div className="DoctorDetails">
                        <div className="Header">
                            <h3>Doctor Details</h3>
                        </div>
                        <div className="DoctorDetailsContent">
                            <p><span>Name: </span>{currentOrder.doctor_name}</p>
                            <p><span>Hospital: </span>{currentOrder.hospital}</p>
                            <p><span>Date of Issue: </span>{currentOrder.date_of_issue}</p>
                        </div>
                    </div>

                    <div className="PatientDetails">
                        <div className="Header">
                            <h3>Patient Details</h3>
                        </div>
                        <div className="PatientDetailsContent">
                            <div className="pdb1">
                            <p><span>Patient ID: </span>{currentOrder.patient_id}</p>
                            <p><span>Age: </span>{currentOrder.patient_age}</p>
                            <p><span>weight: </span>{currentOrder.patient_weight}Kg</p>
                            </div>
                            <div>
                                <p><span>Description: </span>
                                {currentOrder.diagnosis}
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
                        {
                            currentOrder.pharmacies[0].drugs.map(drug=>
                                (<Drug
                                    brand={drug.brand}
                                    concentration={drug.concentration}
                                    dosage={drug.dosage}
                                    name={drug.name}
                                    quantity={drug.quantity}
                                    price={drug.price}
                                    total_price={drug.total_price}
                                />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withSideBar(OrderDetails)
