import './auth.css';
import Input from '../../components/general/Input.js'
import Button from '../../components/general/Button.js';

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
    <form>
      <h2>Create new account</h2>
      <Input label="Username:" type="text" className="usernameInput" value={username} setValue={setUsername} icon="fa-solid fa-user" />
      <Input label="Password:" type="password" className="passwordInput" value={password} setValue={setPassword} icon="fa-solid fa-key" />
      <Button label="Sign Up" className="submitButton" onClick={() => {}} icon="fa-solid fa-plus" />
    </form>
  );
};

export default Register;
