import React from 'react';
import {withSideBar} from '../components/SideBar';

function Overview() {
    return (
        <div className="Page">
             <div className="Header">
                <h2>Overview</h2>
            </div>
        </div>
    )
}

export default withSideBar(Overview);
