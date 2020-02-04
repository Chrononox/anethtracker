import React from 'react';

class TestZone extends React.Component{
    constructor(props){
        super(props)

        console.log({props})
    }

    render(){
        return(
            <h2>{this.props.test}</h2>
        )
    }
}

export default TestZone;