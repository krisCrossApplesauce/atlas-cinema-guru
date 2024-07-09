import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

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
      {isLoggedIn === true ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;
