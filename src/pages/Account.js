import React from 'react'
import {withSideBar} from '../components/SideBar';

function Account() {
    return (
        <div className="Page">
             <div className="Header">
                <h2>Account</h2>
            </div>
        </div>
    )
}

export default withSideBar(Account);
