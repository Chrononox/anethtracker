import React from 'react';

class TestZone extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h2>Test: {this.props.test}</h2>
        )
    }
}

export default TestZone;