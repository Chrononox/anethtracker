import React from 'react'

const ExportButton = ({ btnName, setFunc}) =>{
    return(
        <button onClick={setFunc}>{btnName}</button>
    )
}

export default ExportButton;