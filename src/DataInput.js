import React from 'react'

const DataInput = ({title, data, setFunc}) =>{
    return(
        <div className="tc">
            {console.log(`${title} ${data}`)}
            <p>{title} 
                <input 
                    placeholder={data}
                    onChange={setFunc}
                />
            </p>
        </div>
    )
}

export default DataInput;