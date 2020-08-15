import React from 'react'
import {withSideBar} from '../components/SideBar';
import {useParams} from "react-router-dom"

function OrderDetails() {
    const {id} = useParams() 

    return (
        <div className="Page">
            <div className="Header">
            <h2>Order {id}</h2>
            </div>
            Order Details Page
        </div>
    )
}

export default withSideBar(OrderDetails)
