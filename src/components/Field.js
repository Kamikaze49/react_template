import React from 'react'


const textStyle = {
    fontWeight:"bold",
    width:"30%",
    minWidth:"70px",
}


const inputStyle = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fafafa",
    height: "40px",
    borderRadius: "3px",
    padding:"15px"
}

function Field({name, width, value, singleLine}) {
    return (
        <div style={{width:width, minWidth:"250px", margin:"15px 10px"}}> 
            <span style={textStyle} >{name}:</span>
            {!singleLine && <br/>}
            <input style={ singleLine?{...inputStyle, width:"70%"}:{...inputStyle, width:"100%"} } type="text" value={value} disabled={true}/>
        </div>
    )
}

export default Field
