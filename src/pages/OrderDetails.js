import React, {useState, useContext, useEffect} from 'react'
import {withSideBar} from '../components/SideBar';
import {useParams} from "react-router-dom"
import Drug from "./../components/Drug"
import OrderContext, {OrderProvider} from "./../contexts/OrderContext";
import UserContext, {UserProvider} from "./../contexts/UserContext";
import { db } from "./../firebase"
import {useHistory} from "react-router-dom"



function OrderDetails(props) {
    const history = useHistory()
    const {id} = useParams() 
    const [currentOrder, setCurrentOrder] = useState({
        id:"",
        doctor_name:"",
        hospital:"",
        date_of_issue:"",
        pharmacies:{drugs:[]},
        patient_id:"",
        patient_age:null,
        patient_weight:null,
        diagnosis:""
    })
    const order = useContext(OrderContext)
    const user = useContext(UserContext)
    const userId = user.id

    const setDrugDetails = (drugDetails) =>{
        let order = currentOrder
        order.pharmacies.drugs = drugDetails
        setCurrentOrder(order)
    }

    useEffect(()=>{
        order.forEach(item=>{
            // console.log(item)
            if(item.id === id){
                // console.log(item)
                setCurrentOrder(item)
            }
        })

    }, [])

    const setDrugData = (name, price, brand, measure, prescription) =>{
        const order = currentOrder
        order.pharmacies.drugs.forEach(drug =>{
            if(drug.name === name){
                drug.price = price
                drug.brand = brand
                drug.measure = measure
                drug.prescription = prescription
            }
        })
        setCurrentOrder(order)
        // console.log(order)
    }

    // https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
    
    // https://firebase.google.com/docs/firestore/manage-data/add-data

    const submitData = () =>{
        let idx = currentOrder.idx
        delete currentOrder.idx
        const docRef = db.collection("orders").doc(currentOrder.id)
        if(currentOrder.order_status === "new")currentOrder.order_status = "pending"
        try{
        docRef.get().then(doc =>{
            if(doc.exists){
                let pharmacies = doc.data().pharmacies
                if(currentOrder.pharmacies.accepted_status === "new")currentOrder.pharmacies.accepted_status = "pending"
                if(currentOrder.pharmacies.accepted_status === "accepted")currentOrder.pharmacies.accepted_status = "delivering"
                pharmacies[idx] = currentOrder.pharmacies
             
                db.collection("orders").doc(currentOrder.id).update({
                    pharmacies:pharmacies
                }).then(()=> {
                    history.push("/Orders")
                    alert("Submission Complete")
                })
            }
        })
    }catch(e){
        alert(e.message)
    }
    
    }





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
                            currentOrder.pharmacies.drugs.map(drug=>
                                (<Drug
                                    brand={drug.brand}
                                    concentration={drug.concentration}
                                    dosage={drug.dosage}
                                    name={drug.name}
                                    quantity={drug.quantity}
                                    price={drug.price}
                                    status={currentOrder.pharmacies.accepted_status}
                                    total_price={drug.total_price}
                                    setData = {setDrugData}
                                />)
                            )
                        }
                    </div>
                </div>
            </div>{(currentOrder.pharmacies.accepted_status === "new" || currentOrder.pharmacies.accepted_status === "accepted")&&
                <button className="sbtn" onClick={()=>submitData()}>Submit</button>
            }
        </div>
    )
}

export default withSideBar(OrderDetails)
