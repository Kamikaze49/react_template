import React from 'react'

function OrderCard({name, id}) {
    return (
        <div className="orderCard">
            <div className="cardContent">
                <p><strong>Order No. {id}</strong></p>
                <p>{name}</p>
                <p>Patient ID</p>
            </div>

            <div className="cardFooter">
                <p>Status: <strong>New</strong></p>
                <button>Details</button>
            </div>
        </div>
    )
}

export default OrderCard
