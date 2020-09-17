import React from 'react'
import { Link } from "react-router-dom"

function OrderCard({name, id, type, arrived, completed, patient_id, status}) {
    return (
        <div className="orderCard">
            <div className="cardContent">
            <p><strong>Order No. {id}</strong></p>
            <p>{name}</p>
            <p>Patient ID: {patient_id}</p>
            </div>

            <div className="cardFooter">
                <p>Status: <strong>{status}</strong></p>
                <button><Link style={{color:"#fff"}} to={`/Orders/${id}`} >Details</Link></button>
            </div> 
        </div>
    )
}

export default OrderCard
