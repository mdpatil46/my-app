import React from 'react'

function Calculator() {
 
    function addInput(value) {
        document.getElementById('myinput').value += value;  
    }
    
    function claculateValue() {
      let expression = document.getElementById('myinput').value;
    let calculate = new Function('return ' + expression.replace(/(\d)([+\-*/])/g, '$1 $2'));
        let result = calculate();
        document.getElementById('myinput').value = result;

    }
    function clearinput() {
        document.getElementById('myinput').value = '';
    }

  return (
    <>
      <div>
        <input type="text" id='myinput'/><br />
        <button onClick={clearinput}>AC</button>
        <button onClick={()=>addInput('+')}>+/-</button>
        <button onClick={()=>addInput('%')}>%</button>
        <button onClick={()=>addInput('/')}>/</button><br />
        <button onClick={()=>addInput(7)}>7</button>
        <button onClick={()=>addInput(8)}>8</button>
        <button onClick={()=>addInput(9)}>9</button>
        <button onClick={()=>addInput('*')}>X</button><br />
        <button onClick={()=>addInput(4)} >4</button>
        <button onClick={()=>addInput(5)}>5</button>
        <button onClick={()=>addInput(6)}>6</button>
        <button onClick={()=>addInput('-')}>-</button><br />
        <button onClick={()=>addInput(1)}>1</button>
        <button onClick={()=>addInput(2)}>2</button>
        <button onClick={()=>addInput(3)}>3</button>
        <button onClick={()=>addInput('+')}>+</button><br /> 
        <button onClick={()=>addInput(0)}>0</button>
        <button onClick={()=>addInput('.')}>.</button>
        <button onClick={claculateValue}>=</button>
        
      </div>
    </>
  )
}

export default Calculator
