import './auth.css';
import Input from '../../components/general/Input.js'
import Button from '../../components/general/Button.js';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

// Create src/routes/auth/Register.js:

//  - The file should import auth.css
//  - The file should export a functional component named Register as default:
//    - Authentication must accept these props:
//      - username: string – The username controlled state
//      - password: string – The password controlled state
//      - setUsername: function – The setState for the username state
//      - setPassword: function –The setState for the password state
//    - Register must return:
//      - Two Inputs for the username and password
//      - A Button for submit

const Register = ({username, password, setUsername, setPassword}) => {
  return (
    <div className="signOutContainer">
      <h2>Create new account</h2>
      <Input label="Username:" type="text" className="usernameInput" value={username} setValue={setUsername} icon={faUser} />
      <Input label="Password:" type="password" className="passwordInput" value={password} setValue={setPassword} icon={faKey} />
      <Button type="submit" label="Sign Up" className="submitButton" onClick={() => {}} icon={faPlus} />
    </div>
  );
};

export default Register;
