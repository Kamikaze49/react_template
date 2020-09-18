import React, {useState} from 'react'

function Drug({status, brand, price, quantity, concentration, dosage, name, setData}) {
    const [drugBrand, setDrugBrand] = useState(brand)
    const [drugQuantity, setDrugQuantity] = useState(dosage)
    const [drugPrice, setDrugPrice] = useState(price)
    const [drugPrescription, setDrugPrescription] = useState(null)

    return (
        <div className="drugCard">
            <div className="cardHeader">
                <h4>{name} - {concentration}</h4>
            </div>
            <div className="cardContent">
                <input disabled={status==="accepted"||status ==="pending"} type="text" 
                placeholder="Brand" 
                value={drugBrand}
                onChange={(e)=> {setDrugBrand(e.target.value)
                    setData(name, drugPrice, e.target.value, drugQuantity, drugPrescription)
                }}/>
                <div>
                <select disabled={status==="accepted"||status ==="pending"} value={drugQuantity} 
                onChange={(e)=> {
                    setDrugQuantity(e.target.value)
                    setData(name, drugPrice, drugBrand, e.target.value, drugPrescription)
                }} >
                    <option value="">Quantity per...</option>
                    <option value="Box">Box</option>
                    <option value="Strip">Strip</option>
                    <option value="Bottle">Bottle</option>
                    <option value="Tablet">Tablet</option>
                </select>
                <input type="number" 
                disabled={status==="accepted"||status ==="pending"}
                placeholder="Price(GHC)" 
                value={drugPrice} 
                onChange={(e) =>{ setDrugPrice(e.target.value)
                    setData(name, e.target.value, drugBrand, drugQuantity, drugPrescription)
                }}/>
                </div>

                {status === "accepted" &&
                <div className="Prescription">
                <h3>
                    Prescription Details
                </h3>
                <textarea rows="4" value={drugPrescription} onChange={e=> {
                    setDrugPrescription(e.target.value)
                    setData(name, drugPrice, drugBrand, drugQuantity, e.target.value)
                
                }}/>
            </div>}
            </div>

        </div>
    )
}

export default Drug

