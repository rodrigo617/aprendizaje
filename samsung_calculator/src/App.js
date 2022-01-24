import './App.css'
import styled from "styled-components"
import { useState } from "react";

const Button = styled.button`
  color: white;
  background-color: rgb(128,128,128,0.25);
  font-size: 2rem;
  border-radius: 3rem;
  cursor: pointer;
  border: 1px solid black;
  outline:none;
  margin: 6px;
  
  &:hover {
    background-color:rgb(225,225,225,0.25);;
  }
`
const GreenButton = styled(Button)`
  color: green;

`
const GreenButtonA = styled(GreenButton)`
  font-size: 2.6rem;
  
`
const RedButton = styled(Button)`
  color: #D35730 ;
`

const IqualButton = styled(Button)`
  background-color: green;
  font-size: 2.5rem;
  
  &:hover {
    background-color:rgb(0,225,0,0.65);;
  }
`


function App() {

  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [currentOperation, setCurrentOperation] = useState("")
  const [result, setResult] = useState("")

  function clickNumber(val){

    if (currentOperation === ""){
       setNumber1(number1 + val);
    } else {
       setNumber2(number2 + val)
    } 
  }

   function clickOperation(val){
     setCurrentOperation(val)
   
  }

  return (
    <div className="App">
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previus-operant'>{currentOperation ? number1 + currentOperation : ""}</div>
          <div className='current-operent'>{currentOperation ? number1 : number2}</div>
        </div>
        <div className='tools'></div>
        <RedButton>C</RedButton>
        <GreenButton>()</GreenButton>
        <GreenButton onClick={() => clickOperation("%")} >%</GreenButton>
        <GreenButtonA onClick={() => clickOperation("/")} >÷</GreenButtonA>
        <Button onClick={() => clickNumber(7)} >7</Button>
        <Button onClick={() => clickNumber(8)} >8</Button>
        <Button onClick={() => clickNumber(9)} >9</Button>
        <GreenButtonA onClick={() => clickOperation("x")} >x</GreenButtonA>
        <Button onClick={() => clickNumber(4)} >4</Button>
        <Button onClick={() => clickNumber(5)} >5</Button>
        <Button onClick={() => clickNumber(6)} >6</Button>
        <GreenButtonA onClick={() => clickOperation("-")} >-</GreenButtonA>
        <Button onClick={() => clickNumber(1)} >1</Button>
        <Button onClick={() => clickNumber(2)} >2</Button>
        <Button onClick={() => clickNumber(3)} >3</Button>
        <GreenButtonA onClick={() => clickOperation("+")} >+</GreenButtonA>
        <Button onClick={() => clickOperation("+/-")} >+/-</Button>
        <Button onClick={() => clickNumber(0)} >0</Button>
        <Button >.</Button>
        <IqualButton>=</IqualButton>
      </div>
    </div>
  );
}

export default App;
