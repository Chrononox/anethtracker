import React from 'react'

const ExportButton = (props) =>{
    return(
        <button onClick={props.setFunc}>{props.btnName}</button>
    )
}

export default ExportButton;