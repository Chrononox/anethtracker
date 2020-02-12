import React from 'react'

//add old data viewable to the side
const DataInput = ({title, data, setFunc}) =>{
    return(
        <div className="tc">
            <p>{title}: 
                <input 
                    placeholder={data}
                    onChange={setFunc}
                />
            </p>
        </div>
    )
}
export default DataInput