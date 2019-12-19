import React from 'react'
import OperandButton from './OperandButton'

class Display extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      display: "",
      output: 0,
    }
    this.handleDisplayInput = this.handleDisplayInput.bind(this)
  }
  handleDisplayInput = (buttonLabel) => {
    console.log(buttonLabel)
    this.setState({ display: this.state.display+buttonLabel })
    console.log(this.state)
  }

  handleEqual = (buttonLabel) => {
    let total = eval(this.state.display)
    this.setState({output: total })
  }
  render() {
    return (
      <div>
        <div>
          Output
          <input type="number" readOnly value={this.state.output}/>
        </div>
        Input
        <input type="text" readOnly value={this.state.display}/>
        <div>
        Row 1
        <OperandButton buttonLabel="C" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="±" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="%" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="/" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div>Row 2
        <OperandButton buttonLabel="7" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="8" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="9" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel = "*" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div>Row 3
        <OperandButton buttonLabel="4" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="5" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="6" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="-" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div>Row 4
        <OperandButton buttonLabel="1" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="2" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="3" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="+" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div>
        Row 5
        <OperandButton buttonLabel="0" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="." setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="=" setButtonValue={this.handleEqual}/>

    
     
      </div>
      </div>
    )
  }
}

  



export default Display