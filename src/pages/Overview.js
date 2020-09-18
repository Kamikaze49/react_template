import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory } from "react-router-dom"
import {withSideBar} from '../components/SideBar';
import UserContext from "./../contexts/UserContext";
import {auth} from "./../firebase";
import OrderContext, {OrderProvider} from "./../contexts/OrderContext";

import OrderCard from "./../components/OrderCard"

function Overview() {
    const [user, setUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    const history = useHistory() 
    const order = useContext(OrderContext)
    
    useEffect(()=>{
        let l = 4
        if(order.length<4)l=order.length
        setOrders(order.slice(0,l))
    },[])

    return (
        <div className="Page Overview">
            
            <div className="Header">
                <h2>Overview</h2>
            </div>

            <div className="RecentOrders">
                 <div className="Header">
                    <h2>Recent Orders</h2>
                 </div>
                 <div className="RecentOrdersBody">
                    {
                        orders.map(order=>
                            (<OrderCard
                            name={order.doctor_name}
                            id={order.id}
                            arrived={order.date_of_issue}
                            patient_id={order.patient_id}
                            status={order.status}
                            />)
                        )
                    }
                 </div>
            </div>

            <div className="info">
                <div className="Header">
                    <h2>Stats</h2>
                </div>
                <div className="StatsBody">
                    <div>

                    </div>
                    <div>

                    </div>
                 </div>
            </div>

        </div>
    )
}

export default withSideBar(Overview);
