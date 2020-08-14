import React, {useEffect} from 'react'

import OrderCard from "./../components/OrderCard"
import HistoryCard from "./../components/HistoryCard"

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
                {title == "History"?
                data.map(item => 
                    <HistoryCard 
                    key = {item.id}
                    name={item.name} 
                    arrived={item.suite} 
                    completed={item.id%2?"true":"false"} 
                    id={item.id}
                    status = {item.status}
                    patient_id={item.patient_id} 
                    type={item.type}/>
                )
                :
                    data.map(item => 
                        <OrderCard 
                        key = {item.id}
                        name={item.name} 
                        arrived={item.suite} 
                        completed={item.id%2?"true":"false"} 
                        id={item.id}
                        status = {item.status}
                        patient_id={item.patient_id} 
                        type={item.type}/>
                    )
                }
            </div>
        </div>
    )
}

export default OrderHolder
