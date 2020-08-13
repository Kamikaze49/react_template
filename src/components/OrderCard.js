import React from 'react'
import { NavLink } from "react-router-dom"

function OrderCard({name, id, type, arrived, completed}) {
    return (
        <div className="orderCard">
            {
            type === "history"?
            <>
            <div className="cardContent HCC">
                <p><strong>Order No. {id}</strong></p>
                <p>Arrived: {arrived}</p>
                <p>Completed: {completed}</p>
            </div>

            <div className="cardFooter HCC">
                <p>Status: <strong>New</strong></p>
                <button><NavLink style={{color:"#fff"}} to={`/Orders/${id}`} >More...</NavLink></button>
            </div> 
            </>:
            <>
            <div className="cardContent">
            <p><strong>Order No. {id}</strong></p>
            <p>{name}</p>
            <p>Patient ID</p>
            </div>

            <div className="cardFooter">
                <p>Status: <strong>New</strong></p>
                <button><NavLink style={{color:"#fff"}} to={`/Orders/${id}`} >Details</NavLink></button>
            </div> 
            </>
            }
        </div>
    )
}

export default OrderCard
