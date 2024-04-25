import React, { Component } from 'react'
import NVD_EventForm1 from './components/NVD_EventForm1'
import NVD_EventForm2 from './components/NVD_EventForm2'
import NVD_EventForm3 from './components/NVD_EventForm3'
import NVD_EventForm4 from './components/NVD_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='contaier'>
        <h1>Event From Duoc04</h1>
        <NVD_EventForm1 />
        <NVD_EventForm2 />
        <NVD_EventForm3 />
        <NVD_EventForm4 name="Nguyễn Văn Được" />
      </div>
    )
  }
}
