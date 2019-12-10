import React, {useState} from 'react'
import OperandButton from './OperandButton'

 const UserInput = () => {
   const [UserInput] = useState("")
   
  //  const handleInput = (e) => {
  //     console.log(e.target.value)
  //  }
    return (
      <div>
        Input
        <input type="text" value={UserInput}/>
        <div>
        Row 1
        <OperandButton buttonLabel="C" />
        <OperandButton buttonLabel="±" />
        <OperandButton buttonLabel="%" />
        <OperandButton buttonLabel="/" />
      </div>
      <div>Row 2
        <OperandButton buttonLabel="7"  />
        <OperandButton buttonLabel="8" />
        <OperandButton buttonLabel="9" />
        <OperandButton buttonLabel = "*"/>
      </div>
      <div>Row 3
        <OperandButton buttonLabel="4" />
        <OperandButton buttonLabel="5" />
        <OperandButton buttonLabel="6" />
        <OperandButton buttonLabel="-" />
      </div>
      <div>Row 4
        <OperandButton buttonLabel="1" />
        <OperandButton buttonLabel="2" />
        <OperandButton buttonLabel="3" />
        <OperandButton buttonLabel="+" />
      </div>
      <div>
        Row 5
        <OperandButton buttonLabel="0" />
        <OperandButton buttonLabel="." />
        <OperandButton buttonLabel="=" />

    
     
      </div>
      </div>
    )
}

export default UserInput