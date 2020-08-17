import React, {useState, useContext} from 'react';
import { Link, useHistory } from "react-router-dom"
import {withSideBar} from '../components/SideBar';
import UserContext from "./../contexts/UserContext";
import {auth} from "./../firebase";

import OrderCard from "./../components/OrderCard"

function Overview() {
    const [user, setUser] = useContext(UserContext)
    const history = useHistory() 



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
                    <OrderCard
                        name="John Doe"
                        id="4gfdth354"
                        arrived="Today"
                        completed={false}
                        patient_id="123461"
                        status="Pending"
                    />
                    <OrderCard
                        name="John Doe"
                        id="4gfdth354"
                        arrived="Today"
                        completed={false}
                        patient_id="123461"
                        status="Pending"
                    />
                    <OrderCard
                        name="John Doe"
                        id="4gfdth354"
                        arrived="Today"
                        completed={false}
                        patient_id="123461"
                        status="Pending"
                    />
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
