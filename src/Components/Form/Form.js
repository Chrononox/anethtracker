import React from 'react';



//this form will gather all of the vital signs of the PT send off to be placed in a array to be printed out

const Form = ({ time, hr, resp, temp, spo2, co2, bp, iso, ivf, ekg, setcurrtime, sethr, setresp, settemp, setspo2, setco2, setbp, setiso, setivf, setekg, settoarray }) =>{
  return(
    <div className=''>
      <p>HR: <input onChange={sethr} placeholder={hr}/></p>
      <p>RESP: <input onChange={setresp} placeholder={resp}/></p>
      <p>TEMP: <input onChange={settemp} placeholder={temp}/></p>
      <p>SPO2: <input onChange={setspo2} placeholder={spo2+'%'}/></p>
      <p>CO2: <input onChange={setco2} placeholder={co2}/></p>
      <p>BP: <input onChange={setbp} placeholder={bp}/></p>
      <p>ISO: <input onChange={setiso} placeholder={iso}/></p>
      <p>IVF: <input onChange={setivf} placeholder={ivf+' ml/hr'}/></p>
      <p>EKG: <input onChange={setekg} placeholder={ekg}/></p>
      
    </div>
  )  
}
export default Form;