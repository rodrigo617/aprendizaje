
import './App.css'
import LoginButton from './components/LoginButton'
import { LogoutButton } from './components/LogoutButton';
// import { Profile } from './components/Profile';



function App() {

  return (
    <div className="App">
      <h1>hola</h1>
      <LoginButton/>
      {/* <Profile />  */}
      <LogoutButton/>
    </div>
  );
}

export default App;
