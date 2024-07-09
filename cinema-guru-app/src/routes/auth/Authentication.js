import { useState } from 'react';
import './auth.css';
import Button from '../../components/general/Button.js';
import Login from './Login.js';
import Register from './Register.js';
import axios from 'axios';

// Create src/routes/auth/Authentication.js:
//  - The file should import auth.css
//  - The file should export a functional component named Authentication as default:
//    - Authentication must accept these props:
//      - setIsLoggedIn: function – The setState for the isLoggedin state
//      - setUserUsername: function –The setState for the userUsername state
//    - Add the following state to the component using the useState hook:
//      - _switchBoolean default: true
//      - usernamestring default: ""
//      - passwordstring default: ""
//    - Authentication must return a html form in which there’s two Buttons:
//      - Sign In: When clicked sets the _switch state to true
//      - Sign Up: When clicked sets the _switch state to false

const Authentication = ({setIsLoggedIn, setUserUsername}) => {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit has been called: ", event);
    try {
      const route = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
      axios.post(route, {
        username,
        password
      })
      .then((response) => {
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      });
    } catch (err) {
      console.log('error: ' + err);
    }
  };

  return (
    <form className="Authentication" onSubmit={handleSubmit}>
      <div className="buttonsContainer">
        <Button type="button" label="Sign In" className="signIn" onClick={() => { set_switch(true); }} />
        <Button type="button" label="Sign Up" className="signUp" onClick={() => { set_switch(false); }} />
      </div>
      { _switch === true ?
      <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> 
      : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />  }
    </form>
  );
};

export default Authentication;
