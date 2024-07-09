import './dashboard.css';
import Header from '../../components/navigation/Header.js';

// Create src/routes/dashboard/Dashboard.js:
//  - The file should import dashboard.css
//  - The file should import the Header component
//  - The file should export a functional component named Dashboard as default:
//    - Dashboard must accept these props:
//      - userUsername: string – The state for the username
//      - setIsLoggedIn: function –The setState for the isLoggedin state
//    - Dashboard must return a html div containing these elements and others:
//      - Add the Header component to Dashboard return value passing to it the
//        userUsername and setIsLoggedIn as props

const Dashboard = ({userUsername, setIsLoggedIn}) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Dashboard;
