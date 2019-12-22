import React from 'react'
import OperandButton from './OperandButton'
import '../App.css';

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
    buttonLabel === "%" ? this.setState({ display: this.state.display+ "/100"}) : this.setState({ display: this.state.display+buttonLabel })
    console.log(buttonLabel)
    // this.setState({ display: this.state.display+buttonLabel })
    console.log(this.state)
  }

  handleEqual = () => {
    let total = eval(this.state.display)
    this.setState({output: total })
  }

  handleClear = () => {
    this.setState({
      display: "",
      output: 0
    })
  }
  render() {
    return (
      <div className="calculator">
      
        <div className="display">
          <input className="display-text" type="number" readOnly value={this.state.output} />
          <hr/>
          <input className="display-text" type="text" readOnly value={this.state.display}/>
        </div>
   
        <div className="button-row">
        <OperandButton buttonLabel="C" setButtonValue={this.handleClear} />
        <OperandButton buttonLabel="±" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="%" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="/" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div className="button-row">
        <OperandButton buttonLabel="7" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="8" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="9" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel = "*" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div className="button-row">
        <OperandButton buttonLabel="4" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="5" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="6" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="-" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div className="button-row">
        <OperandButton buttonLabel="1" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="2" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="3" setButtonValue={this.handleDisplayInput}/>
        <OperandButton buttonLabel="+" setButtonValue={this.handleDisplayInput}/>
      </div>
      <div className="button-row">
        <OperandButton buttonLabel="0" setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="." setButtonValue={this.handleDisplayInput} />
        <OperandButton buttonLabel="=" setButtonValue={this.handleEqual}/>

    
     
      </div>
      </div>
    )
  }
}

  



export default Display