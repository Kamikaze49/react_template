import React from 'react'
import { NavLink } from "react-router-dom"

function HistoryCard({name, id, type, arrived, completed, patient_id, status}) {
    return (
        <div className="orderCard">
            <div className="cardContent HCC">
                <p><strong>Order No. {id}</strong></p>
                <p>Arrived: {arrived || "16-03-2020"}</p>
                <p>Completed: {completed || "14-05-2020"}</p>
            </div>

            <div className="cardFooter HCC">
                <p></p>
                <button><NavLink style={{color:"#fff"}} to={`/Orders/${id}`} >More...</NavLink></button>
            </div>
        </div>
    )
}

export default HistoryCard
