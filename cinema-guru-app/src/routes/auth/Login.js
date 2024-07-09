import './auth.css';
import Input from '../../components/general/Input.js'
import Button from '../../components/general/Button.js';

// Create src/routes/auth/Login.js:
//  - The file should import auth.css
//  - The file should export a functional component named Login as default:
//    - Login must accept these props:
//    - username: string – The username controlled state
//    - password: string – The password controlled state
//    - setUsername: function – The setState for the username state
//    - setPassword: function –The setState for the password state
//  - Login must return:
//    - Two Inputs for the username and password
//    - A Button for submit

const Login = ({username, password, setUsername, setPassword}) => {
  return (
    <div className="signInContainer">
      <h2>Sign in with your account</h2>
      <Input label="Username:" type="text" className="usernameInput" value={username} setValue={setUsername} icon="fa-solid fa-user" />
      <Input label="Password:" type="password" className="passwordInput" value={password} setValue={setPassword} icon="fa-solid fa-key" />
      <Button type="submit" label="Sign In" className="submitButton" onClick={() => {}} icon="fa-solid fa-key" />
    </div>
  );
};

export default Login;
