import React from 'react'

function Drug() {
    return (
        <div className="drugCard">
            <div className="cardHeader">
                <h4>Paracetamol - 500mg</h4>
            </div>
            <div className="cardContent">
                <input type="text" placeholder="Brand"/>
                <div>
                <select>
                    <option>Quantity per...</option>
                    <option>Box</option>
                    <option>Strip</option>
                    <option>Bottle</option>
                    <option>Can</option>
                </select>
                <input type="number" placeholder="Price(GHC)"/>
                </div>
            </div>

        </div>
    )
}

export default Drug
