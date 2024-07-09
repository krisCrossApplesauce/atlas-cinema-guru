import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';

function App() {
  let [isLoggedIn] = useState(false);
  let [userUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetch('/api/auth/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
      .then(response => {
        if (accessToken) {
          isLoggedIn = true;
          userUsername = response.data.username;
        }
      });
    }
  });

  return (
    <div className="App">
      {isLoggedIn === true ? null : <Authentication />}
    </div>
  );
}

export default App;
