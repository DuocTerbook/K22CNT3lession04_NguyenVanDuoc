import React, { Component } from 'react'
//Xử lý sự kiện với props, state
export default class NVD_EventForm3 extends Component {
    constructor(props){
        super(props);
        //Tạo đối tượng dữ liệu thồng qua state
        this.state = {
            name:"Nguyễn Văn Được",
            job:"Dev soft"
        }
    }
    //Hàm xử lý sự kiện
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT3-ReactJs"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            job:"Cộng nghệ phần mềm",
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
