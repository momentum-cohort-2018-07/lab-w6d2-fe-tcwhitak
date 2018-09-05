import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
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
      <button className='calButton' onClick={() => window.alert(this.props.value)}>
        {this.props.value}
      </button>
    )
  }
}

class Calculator extends Component {
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
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('/')}
        </div>
        <div className='calc-row'>
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton('*')}
        </div>
        <div className='calc-row'>
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton('-')}
        </div>
        <div className='calc-row'>
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderButton('+')}
        </div>
        <div className='calc-row'>
          {this.renderButton(0)}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
