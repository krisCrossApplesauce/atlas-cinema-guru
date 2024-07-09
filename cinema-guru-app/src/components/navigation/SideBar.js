import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./navigation.css";
import Activity from '../Activity';

// Create src/components/navigation/SideBar.js:
//  - The file should import navigation.css
//  - The file should export a functional component named SideBar as default:
//    - Add the following state to the component using the useState hook:
//      - selected string default: "home"
//      - small boolean default: true
//      - activities array default: []
//      - showActivities boolean default: false
//    - Create setPage function:
//      - setPage takes one parameter pageName
//      - setPage sets the selected state to pageName
//      - using the useNavigate hook, redirect the user to the desired page
//        - “Home” => /home
//        - “Favorites” => /favorites
//        - “Watch Later” => /watchlater
//    - Using the useEffect hook:
//      - Send a get request using axios to /api/activity. on Success set the
//        activities state to the response data.
//    - Authentication must return a html nav containing these elements and others:
//      - Navigation ul:
//        - Contains three li with an icon corresponding to the design and the
//          following text "Home" "Favorites" "Watch Later", then bind the li’s
//          onClick event to setPage function passing the corresponding pageName
//      - Activity ul:
//        - Map the first 10 values from the activities state to the Activity
//          component.

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = ({ pageName }) => {
    setSelected(pageName);
    switch (pageName) {
      case "Home":
        navigate('/home');
      case "Favorites":
        navigate('/favorites');
      case "Watch Later":
        navigate('/watchlater');
      default:
        navigate('/home');
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.get('http://localhost:8000/api/activity/', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        setActivities(response.data);
      });
    }
  }, []);

  return (
    <nav>
      <ul className="NavigationUL">
        <li onClick={() => {setPage("Home")}}>Home</li>
        <li onClick={() => {setPage("Favorites")}}>Favorites</li>
        <li onClick={() => {setPage("Watch Later")}}>Watch Later</li>
      </ul>
      <ul className="ActivityUL">
        { activities.slice(0,10).map((activity) => (
            <Activity activity={activity} />
          ))
        }
      </ul>
    </nav>
  );
};

export default SideBar;
