import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      input: '',
      history: []
    }
  }
  render () {
    return (
      <div className='App'>
        <Calculator
          onClick={(i) => this.handleClick(i)}
          input={this.state.input}
          history={this.state.history}
        />
      </div>

    )
  }

  handleClick (i) {
    const input = this.state.input
    if (input === '' && i === '.') {
      this.setState({
        input: input.concat('0' + i)
      })
    } else if (input === '' && i === '%') {
      this.setState({
        input: input.concat('0' + i)
      })
    } else if (i !== '=' && i !== 'AC') {
      this.setState({
        input: input.concat([i.toString()])
      })
    } else if (i === '=') {
      let result = eval(input)
      this.setState({
        history: this.state.history.concat(`${input.toString()} = ${result.toString()}`),
        input: result.toString()
      })
    } else if (i === 'AC') {
      this.setState({
        input: ''
      })
    }
  }
}

class Calculator extends React.Component {
  renderButton (i) {
    return <CalButton
      value={[i]}
      onClick={() => this.props.onClick(i)}
    />
  }

  renderDisplay () {
    return <Display
      input={this.props.input}
    />
  }

  render () {
    return (
      <div className='calculator'>
        <div id='history'>{this.props.history.map((h, idx) => <div key={idx}>{h}</div>)}</div>
        <div className='calc-wrapper'>
          {this.renderDisplay()}
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
      </div>
    )
  }
}

class Display extends React.Component {
  render () {
    return (
      <div className='display'>
        {this.props.input}
      </div>
    )
  }
}

class CalButton extends React.Component {
  render () {
    return (
      <button className='calButton' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
