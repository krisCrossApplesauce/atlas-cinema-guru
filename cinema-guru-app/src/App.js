import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoggedIn] = useState(false);
  const [userUsername] = useState("");

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
      {isLoggedIn === true ? <Dashboard /> : <Authentication />}
    </div>
  );
}

export default App;
