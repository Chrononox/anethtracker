import React from 'react';
import DataInput from './DataInput';
import ExportButton from './ExportButton';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          temp: '00.0',
          pulse: '00',
          resp: '00',
          data1: '-',
          data2: '-',
          data3: '-',
          data4: '-',
          data5: '-',
          data6: '-',
          data7: '-',
        }
      
      }

      makeArray = () =>{

      }

      ///Data State Setters. There will be a few of these till i know better
        setTemp = (event) => this.setState({temp: event.target.value});
        setPulse = (event) => this.setState({pulse: event.target.value});
        setResp = (event) => this.setState({resp: event.target.value});
        setData1 = (event) => this.setState({data1: event.target.value});
        setData2 = (event) => this.setState({data2: event.target.value});
        setData3 = (event) => this.setState({data3: event.target.value});
        setData4 = (event) => this.setState({data4: event.target.value});
        setData5 = (event) => this.setState({data5: event.target.value});
        setData6 = (event) => this.setState({data6: event.target.value});
        setData7 = (event) => this.setState({data7: event.target.value});

    render(){
        return(
        <div className='inputs'>            
          <DataInput title={'Temp:'} data={this.state.temp} setFunc={this.setTemp} />
          <DataInput title={'Pulse:'} data={this.state.pulse} setFunc={this.setPulse} />
          <DataInput title={'Resp:'} data={this.state.resp} setFunc={this.setResp} />
          <DataInput title={'Data:'} data={this.state.data1} setFunc={this.setData1} />
          <DataInput title={'Data:'} data={this.state.data2} setFunc={this.setData2} />
          <DataInput title={'Data:'} data={this.state.data3} setFunc={this.setData3} />
          <DataInput title={'Data:'} data={this.state.data4} setFunc={this.setData4} />
          <DataInput title={'Data:'} data={this.state.data5} setFunc={this.setData5} />
          <DataInput title={'Data:'} data={this.state.data6} setFunc={this.setData6} />
          <DataInput title={'Data:'} data={this.state.data7} setFunc={this.setData7} />

          <ExportButton btnName={'Sace'} setFunc={this.makeArray} />
        </div>
        )
    }
}
export default Form;