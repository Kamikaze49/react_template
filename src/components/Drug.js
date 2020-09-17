import React, {useState, useEffect} from 'react'

function Drug({status, brand, price, quantity, concentration, dosage, name}) {
    const [drugBrand, setDrugBrand] = useState(null)
    const [drugQuantity, setDrugQuantity] = useState(null)
    const [drugPrice, setDrugPrice] = useState(null)
    const [drugPrescription, setDrugPrescription] = useState(null)


    return (
        <div className="drugCard">
            <div className="cardHeader">
                <h4>{name} - {concentration}</h4>
            </div>
            <div className="cardContent">
                <input disabled={status==="accepted"} type="text" 
                placeholder="Brand" 
                value={drugBrand}
                onChange={(e)=> setDrugBrand(e.target.value)}/>
                <div>
                <select disabled={status==="accepted"} value={drugQuantity} onChange={(e)=> setDrugQuantity(e.target.value)} >
                    <option value="">Quantity per...</option>
                    <option value="Box">Box</option>
                    <option value="Strip">Strip</option>
                    <option value="Bottle">Bottle</option>
                    <option value="Tablet">Tablet</option>
                </select>
                <input type="number" 
                disabled={status==="accepted"}
                placeholder="Price(GHC)" 
                value={drugPrice} 
                onChange={(e)=> setDrugPrice(e.target.value)}/>
                </div>

                {status === "accepted" &&
                <div className="Prescription">
                <h3>
                    Prescription Details
                </h3>
                <textarea rows="4" value={drugPrescription} onChange={e=> setDrugPrescription(e.target.value)}/>
            </div>}
            </div>

        </div>
    )
}

export default Drug

