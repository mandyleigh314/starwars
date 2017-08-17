import React, { Component } from 'react'
import '../styles/App.css'
import Jumbo from './Jumbo'
import Form from './Form'
import Vehicles from './Vehicles'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <Jumbo />
        <Form />
        <Vehicles />
      </div>
      </div>
    )
  }
}

export default App
