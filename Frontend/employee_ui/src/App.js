import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

import Employee from "./Components/Employee";
import Login from "./Login";
import Signup from "./Signup";

import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="App">

      {
        isLoggedIn ? (
          <Employee />
        ) : showSignup ? (
          <Signup setShowSignup={setShowSignup} />
        ) : (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setShowSignup={setShowSignup}
          />
        )
      }

    </div>
  );
}

export default App;