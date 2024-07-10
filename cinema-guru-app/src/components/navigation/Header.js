import "./navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Button from '../general/Button.js';

// Create src/components/navigation/Header.js:
//  - The file should import navigation.css
//  - The file should export a functional component named Header as default:
//    - Header must accept these props:
//      - userUsername: string – The state for the username
//      - setIsLoggedIn: function –The setState for the isLoggedin state
//    - Header must return a html nav containing these elements and others:
//      - img: src="https://picsum.photos/100/100" for random avatars
//      - p: Welcoming the user using the userUsername state
//      - span: with an icon and logout text
//    - Create logout function in which:
//      - Remove the accessToken item from localStorage
//      - Set isLoggedIn state to false
//    - Bind the logout function the the logout span’s onClick event.

const Header = ({userUsername, setIsLoggedIn}) => {
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="headerNav">
      <p>Cinema Guru</p>
      <div>
        <img src="https://picsum.photos/100/100"></img>
        <p>Welcome {userUsername}!</p>
        <span><Button type="button" label="logout" className="logoutButton" onClick={logout} icon={faRightFromBracket} /></span>
      </div>
    </nav>
  );
};

export default Header;
