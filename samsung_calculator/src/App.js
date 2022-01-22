import './App.css'
import styled from "styled-components"

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
  return (
    <div className="App">
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previus-operant'>1235+2235</div>
          <div className='current-operent'>22</div>
        </div>
        <div className='tools'></div>
        <RedButton>C</RedButton>
        <GreenButton>()</GreenButton>
        <GreenButton>%</GreenButton>
        <GreenButtonA>÷</GreenButtonA>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <GreenButtonA>x</GreenButtonA>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <GreenButtonA>-</GreenButtonA>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <GreenButtonA>+</GreenButtonA>
        <Button>+/-</Button>
        <Button>0</Button>
        <Button>.</Button>
        <IqualButton>=</IqualButton>
      </div>
    </div>
  );
}

export default App;
