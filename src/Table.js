import React from 'react';

//replace table head with client infos

const Table = () =>{
    return(
        <div>
           <table>
                <thead>
                    <tr>
                        <th>Name</th> 
                        <th>Account</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>jim</td>
                        <td>102548</td>
                        <td>10-10-10</td>
                    </tr>
                </tbody>   
            </table> 
        </div>
    )
}

export default Table;