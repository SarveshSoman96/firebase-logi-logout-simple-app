import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

import Home from "./component/Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import LogInPage from "./component/LogInPage";

import { auth } from "./firebase";
import { useState, useEffect } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      
      user ? setIsLogged(user.displayName) : setIsLogged("")

    })
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/logIn" element={<Login />}  />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home name={isLogged} />} />
          <Route path="/loginPage" element={<LogInPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
