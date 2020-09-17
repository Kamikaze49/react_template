import React, { useState, useEffect, createContext} from 'react';
import {db} from "./../firebase"

const Context = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  
  useEffect(()=>{
    // make API call and setUser
    var tempOrders = []
    db.collection("orders").onSnapshot(snap =>{
      let changes = snap.docChanges();
      changes.forEach(change => {
        const id = change.doc.id
        const data = change.doc.data()
        tempOrders.push({...data, id:id})
      },[])

      
      setOrder(tempOrders)

    })
    
 

    }, [])
  
  return (
    <Context.Provider value={order}>
      {children}
    </Context.Provider>
  );
};

export default Context;


/**
 *          ORDER
 * ID of order: string
 * Name of Doctor: string
 * ID of Doctor: string
 * ID of patient: string
 * orderStatus: string - `[new, pending, accepted, shipping, completed/delivered]`
 * dateOfIssue: string/Datetime
 * dateOfCompletion: string/Datetime
 * patient age: int
 * patient weight(kg): double
 * description/diagnosis: long string
 * pharmacies: Map<string, any>[] [ 
  *  {
  *    id: string pharmacy ID,
  *    acceptedStatus: string - `[pending, accepted, rejected]` indicates whether a particular pharmacy has been accepted for an order.
  *    drugs: Map<string, any>[] [ 
  *     {
  *       id: string - prescription ID (if any).
  *       name: string - generic name of drug.
  *       concentration: string e.g. 500ml (if other, provide an input field for new entry).
  *       brand: string - the manufacturer's name tag on drug.
  *       measure: string e.g. `[strip, syrup, bottle, blister, ..., (if other, provide an input field for new entry)]`.
  *       price: double - amount per `measure` in ghanaian cedi.
  *       quantity: double - number of `measures` of the drug.
  *       total: double - computed: `price` x `quantity`.
  *       dosage: long string e.g. To be taken x times `[daily, weekly, monthly]`
  *       extraInfo: long string - extra directions on how to take drug could go here
  *     },
  *   ],
  *   totalPriceOfAllDrugs: double - computed: `add(totalField)` of all drugs. 
  *  },
  *  { AnotherDrugGoesHere },
 * ]
 * 
 */


// Link1: https://www.scielo.br/scielo.php?pid=S0080-62342015000700043&script=sci_arttext&tlng=en
// Link2: https://basicmedicalkey.com/processing-medication-orders-and-prescriptions/
// order/pharmacies/id
//  * 
//  */


// Link1: https://www.scielo.br/scielo.php?pid=S0080-62342015000700043&script=sci_arttext&tlng=en
// Link2: https://basicmedicalkey.com/processing-medication-orders-and-prescriptions/
