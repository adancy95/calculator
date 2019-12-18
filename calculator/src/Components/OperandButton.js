import React from 'react';

class OperandButton extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.props.setButtonValue(e.target.value)
  }

  render() {
    return (
      <div>
        <button className="operand-button" value={this.props.buttonLabel} onClick={this.handleChange}>{this.props.buttonLabel}</button>
      </div>
    )
  }
}




export default OperandButton