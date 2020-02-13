import React from 'react';
import './Log.css'

const Log = ({ displayArray }) =>{

    //to build table and display data called after hittng Submit to record button
    const newTable = (arr, index) =>{
       return( arr.map(subArr =>{
           
           return subArr.map((num, index)=>{
                return(
                    <td key={index}>{num}</td>
                )
            })
        }))
  }


    //gets newTable to the body of the page
    const displayTable = newTable(displayArray);

    return (
        <div>
            <h2>Intra-Op Vital Signs</h2>
            <table>
                <thead>
                    <tr className=''>
                        <th>TIME</th>
                        <th>HR</th>
                        <th>RESP.</th>
                        <th>TEMP</th>
                        <th>SPO2</th>
                        <th>CO2</th>
                        <th>BP</th>
                        <th>ISO<br/> RATE</th>
                        <th>IVF</th>
                        <th>EKG<br/> RYTHYM</th>
                    </tr>
                </thead>
                <tbody id='tablebody'>
                    <tr>
                        {displayTable}
                    </tr>
                  
                </tbody>
            </table>
        </div>
    )
}
export default Log;