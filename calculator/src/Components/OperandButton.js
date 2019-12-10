import React, {useState} from 'react';

const  OperandButton = (props) => {
    const[buttonValue] = useState(props.buttonLabel)
    return (
      <div>
        <button className="operand-button" value={buttonValue} onClick={e => console.log(e.target.value)}>{buttonValue}</button>
      </div>
    )
  
}

export default OperandButton