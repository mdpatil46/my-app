import React from 'react'
import { useSelector } from 'react-redux';

function Calculator() {
 
    // function addInput(value) {
    //     document.getElementById('myinput').value += value;  
    // }
    
    // function claculateValue() {
    //   let expression = document.getElementById('myinput').value;
    // let calculate = new Function('return ' + expression.replace(/(\d)([+\-*/])/g, '$1 $2'));
    //     let result = calculate();
    //     document.getElementById('myinput').value = result;

    // }
    // function clearinput() {
    //     document.getElementById('myinput').value = '';
    // }

    const myDarkMode = useSelector((state)=>state.counter.darkMode)

    function addInput(value){
    document.getElementById("myinput").value += value;
    }

    function clearinput(){
      document.getElementById("myinput").value="";
    }
   function claculateValue(){
   try {
    document.getElementById("myinput").value = eval(document.getElementById('myinput').value)
   } catch (error) {
    document.getElementById('myinput').value = 'Error';
   }
   }
  return (
    <>
      <div className={`container  d-flex align-items-center justify-content-center vh-90 ${myDarkMode?'bg-dark':'bg-light'} `}>
        <input type="text" id='myinput'  className="form-control border border-dark mb-2"/><br />
        <div className='container m-5'>
        <button className="btn btn-danger btn-circle m-2 " onClick={clearinput}>AC</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={()=>addInput('+/-')}>+/-</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={()=>addInput('%')}>%</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={()=>addInput('/')}>/</button><br />
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(7)}>7</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(8)}>8</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(9)}>9</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={()=>addInput('*')}>X</button><br />
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(4)} >4</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(5)}>5</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(6)}>6</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={()=>addInput('-')}>-</button><br />
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(1)}>1</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(2)}>2</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(3)}>3</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={()=>addInput('+')}>+</button><br /> 
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput(0)}>0</button>
        <button className="btn btn-secondary btn-circle m-2 " onClick={()=>addInput('.')}>.</button>
        <button className="btn btn-warning btn-circle m-2 " onClick={claculateValue}>=</button>
        </div>
      </div>

{/* <div className={`container  d-flex align-items-center justify-content-center vh-90 ${myDarkMode?'bg-dark':'bg-light'} `}>
    <input type="text" id='myinput' className="form-control border border-dark mb-2"/><br />
    <div className='container m-5'>
    <button className="btn btn-secondary btn-circle m-2 " onClick={clearinput}>AC</button>
    <button className="btn btn-secondary btn-circle m-2 " onClick={() => addInput('%')}>%</button>
    <button className="btn btn-warning btn-circle  m-2" onClick={() => addInput('/')}>/</button><br />
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(7)}>7</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(8)}>8</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(9)}>9</button>
    <button className="btn btn-warning btn-circle m-2" onClick={() => addInput('*')}>X</button><br />
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(4)}>4</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(5)}>5</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(6)}>6</button>
    <button className="btn btn-warning btn-circle m-2" onClick={() => addInput('-')}>-</button><br />
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(1)}>1</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(2)}>2</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(3)}>3</button>
    <button className="btn btn-warning btn-circle m-2" onClick={() => addInput('+')}>+</button><br /> 
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput(0)}>0</button>
    <button className="btn btn-secondary btn-circle m-2" onClick={() => addInput('.')}>.</button>
    <button className="btn btn-warning btn-circle m-2" onClick={claculateValue}>=</button>
    </div>
  </div> */}
    </>
  )
}

export default Calculator
