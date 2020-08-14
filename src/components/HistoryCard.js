import React from 'react'
import { NavLink } from "react-router-dom"

function HistoryCard({name, id, type, arrived, completed, patient_id, status}) {
    return (
        <div className="orderCard">
            <div className="cardContent HCC">
                <p><strong>Order No. {id}</strong></p>
                <p>Arrived: {arrived}</p>
                <p>Completed: {completed}</p>
            </div>

            <div className="cardFooter HCC">
                <p>Status: <strong>New</strong></p>
                <button><NavLink style={{color:"#fff"}} to={`/Orders/${id}`} >More...</NavLink></button>
            </div>
        </div>
    )
}

export default HistoryCard
