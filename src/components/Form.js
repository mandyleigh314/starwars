import React, { Component } from 'react'
import '../styles/App.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }
  }
  _nameChange = (event) => {
    this.setState({ pilot: event.target.value })
  }

  render() {
    return (
      <div className="jumbotron">
      <div className="form">
        <form>
          <label>
            What's Your Name, Pilot?
            <input onChange={this._nameChange} name="pilot" value={this.state.pilot} />
          </label>
        </form>
        <h2>
          Welcome {this.state.pilot}
        </h2>
      </div>
    </div>
    )
  }
}

export default Form
