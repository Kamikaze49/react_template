import React from 'react'
import { NavLink } from "react-router-dom"

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
                <button><NavLink style={{color:"#fff"}} to={`/Orders/${id}`} >Details</NavLink></button>
            </div> 
        </div>
    )
}

export default OrderCard
