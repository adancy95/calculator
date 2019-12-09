import React from 'react';

class OperandButton extends React.Component{
  render() {
    return (
      <div>
        <button className="operand-button">{this.props.buttonLabel}</button>
      </div>
    )
  }
}

export default OperandButton