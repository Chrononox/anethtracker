import React from 'react';
import DataInput from './DataInput'
import ExportButton from './ExportButton'


//this form will gather all of the vital signs of the PT send off to be placed in a array to be printed out

const Form = ({ time, hr, resp, temp, spo2, co2, bp, iso, ivf, ekg, setcurrtime,sethr,  setresp, settemp, setspo2, setco2, setbp, setiso, setivf, setekg, settoarray }) =>{
  return(
    <div className=''>
      <div>
        <DataInput title={'Time'} data={time} setFunc={setcurrtime}/>
        <DataInput title={'HR'} data={hr} setFunc={sethr}/>
        <DataInput title={'Resp'} data={resp} setFunc={setresp}/>
        <DataInput title={'Temp'} data={temp} setFunc={settemp}/>
        <DataInput title={'SPO2'} data={spo2} setFunc={setspo2}/>
        <DataInput title={'CO2'} data={co2} setFunc={setco2}/>
        <DataInput title={'BP'} data={bp} setFunc={setbp}/>
        <DataInput title={'ISO'} data={iso} setFunc={setiso}/>
        <DataInput title={'IVF'} data={ivf} setFunc={setivf}/>
        <DataInput title={'EKG'} data={ekg} setFunc={setekg}/>
      </div>
      <button onClick={settoarray}>save</button>
    </div>
  )  
}
export default Form;