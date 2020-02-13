import React from 'react';
import './Log.css'

const Log = () =>{

    //to build table and display data
    const tableBuilder = () =>{
        const data = [10,5,8,4]
        data.map(num =>{
            return <td>{num}</td>
        })
    }

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
                <tbody>
                    <tr>
                      {/* //table builder component? */}
                      </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Log;