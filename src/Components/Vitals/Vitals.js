import React from 'react';

const Vitals = ({ time, hr, resp, temp, spo2, co2, bp, isorate, ivf, ekg }) =>{
    return(
        <div>
            
            <h1>Vitals</h1>
             <p>time: {time}</p>
             <p>hr: {hr}</p>
             <p>resp: {resp}</p>
             <p>temp: {temp}</p>
             <p>spo2: {spo2}</p>
             <p>co2: {co2}</p>
             <p>bp: {bp}</p>
             <p>isorate: {isorate}</p>
             <p>ivf: {ivf}</p>
             <p>ekg: {ekg}</p>
        </div>
    )
}

export default Vitals;