import './App.css'
import styled from "styled-components"

const Button = styled.button`
  color: white;
  background-color: grey;
  font-size: 18px;
`
const GreenButton = styled(Button)`
  color: green;
`
const IqualButton = styled(Button)`
  background-color: green;
`


function App() {
  return (
    <div className="App">
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previus-operant'></div>
          <div className='current-operent'></div>
        </div>
        <div className='tools'></div>
        <Button>C</Button>
        <GreenButton>()</GreenButton>
        <GreenButton>%</GreenButton>
        <GreenButton>/</GreenButton>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <GreenButton>x</GreenButton>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <GreenButton>-</GreenButton>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <GreenButton>+</GreenButton>
        <Button>+/-</Button>
        <Button>0</Button>
        <Button>.</Button>
        <IqualButton>=</IqualButton>
      </div>
    </div>
  );
}

export default App;
