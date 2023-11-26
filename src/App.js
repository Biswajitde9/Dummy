import logo from './logo.svg';
import './App.css';

import { useState, useEffect, useRef } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    console.log(user);
    setCurrentUser(user);
  };

  return (
    <>
      {currentUser == null 
        ? <Login onLogin={handleLogin} />
        : <Profile currentUser={currentUser}/>
      }
    </>
  );
}

export default App;
