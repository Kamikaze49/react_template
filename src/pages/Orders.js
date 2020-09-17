import React, {useState, useEffect, useContext } from 'react'
import OrderHolder from "./../components/OrderHolder";
import {withSideBar} from '../components/SideBar';
import OrderContext, {OrderProvider} from "./../contexts/OrderContext";

function Orders() {
    const order = useContext(OrderContext)

    const [orders, setOrders] = useState([])
    const [history, setHistory] = useState([])

    useEffect(()=>{
        order.forEach(item => {
          if(item.order_status === "Completed") setHistory([...history, item])
          else setOrders([...orders, item])
          
        });
        
    }, [])

    return (
        <div className="Page Orders">

            <div className="Header">
                <h2>Orders</h2>
            </div>
            <div className="OrdersBody">
                <OrderHolder title="All" data={orders}/>
                <OrderHolder title="History" data={history} />
            </div>
        </div>
    )
}

export default withSideBar(Orders);
