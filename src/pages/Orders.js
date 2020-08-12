import React, {useState, useEffect} from 'react'

import OrderHolder from "./../components/OrderHolder";
import {withSideBar} from '../components/SideBar';


function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setOrders(json))
    })

    return (
        <div className="Page Orders">
            <div className="Header">
                <h2>Orders</h2>
            </div>
            <div className="OrdersBody">
                <OrderHolder title="All" data={orders} />
                <OrderHolder title="History" data={orders} />
            </div>
        </div>
    )
}

export default withSideBar(Orders);
