import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(16).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }
  render () {
    return (
      <div className='App'>
        <Calculator />
      </div>

    )
  }
}

class CalButton extends React.Component {
  render () {
    return (
      <button className='calButton' onClick={() => window.alert('click')}>
        {this.props.value}
      </button>
    )
  }
}

class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttons: Array(16).fill(null),
      xIsNext: true
    }
  }

  renderButton (i) {
    return <CalButton
      value={[i]}
    />
  }

  render () {
    return (
      <div className='calculator'>
        <div className='display'>
      display here
        </div>
        <div className='calc-row'>
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
        </div>
        <div className='calc-row'>
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton(7)}
        </div>
        <div className='calc-row'>
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton(10)}
          {this.renderButton(11)}
        </div>
        <div className='calc-row'>
          {this.renderButton(12)}
          {this.renderButton(13)}
          {this.renderButton(14)}
          {this.renderButton(15)}
        </div>
        <div className='calc-row'>
          {this.renderButton(16)}
          {this.renderButton(17)}
          {this.renderButton(18)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
