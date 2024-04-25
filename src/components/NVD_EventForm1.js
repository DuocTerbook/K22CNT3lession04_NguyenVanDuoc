import React, { Component } from 'react'

export default class NVD_EventForm1 extends Component {
    //Hàm xử lý sự kiện
    eventHandleClick1 = () => {
        alert("event handle 1");
    }
    eventHandleClick2() {
        alert("event click 2");
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Even handle</h2>
                {/* Gọi hàm xử lý sự kiện khi rende */}
                <button onClick={this.eventHandleClick1()}>Click 1</button>
                {/* Gọi hàm xử lý khi click */}
                <button onClick={this.eventHandleClick2}>Click 2</button>
            </div>
        )
    }
}
