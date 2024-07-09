import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import axios from 'axios';

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.post('http://localhost:8000/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      .then((response) => {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn === true ? null : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;
