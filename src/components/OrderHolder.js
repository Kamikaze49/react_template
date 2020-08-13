import React, {useEffect} from 'react'

import OrderCard from "./../components/OrderCard"

function OrderHolder({title, data}) {

    return (
        <div className="OrderHolder">
            <div className="HolderHeader">
                <h2>{title}</h2>
                <div className="filter">
                    Filter By
                </div>
            </div>
            <div className="HolderBody">
                {
                    data.map(item => 
                        <OrderCard 
                        name={item.name} 
                        arrived={item.suite} 
                        completed={item.id%2?"true":"false"} 
                        id={item.id} 
                        type={item.type}/>
                    )
                }
            </div>
        </div>
    )
}

export default OrderHolder
