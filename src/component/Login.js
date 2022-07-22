import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from './InputControl';
import classes from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase";

function Login() {

  const Navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: ""
  });

  const [error, setError] = useState(""); 
  const [btnDisable, setBtnDisable] = useState(false);

  const logInHandler = () => {
    if(!values.email || !values.pass){
      setError("Enter into fields")
      return;
    }
    if(!values.email.includes("@")) {
      setError("Enter valid email")
      return;
    }
    if(values.pass.length < 5){
      setError("Enter valid password")
      return;
    }

    setBtnDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
    .then(res => {
      setBtnDisable(false)
      Navigate("/loginPage")
    }).catch(err => {
      setBtnDisable(false)
      if(err) setError(`You are not a user. Please sign Up first`);
      Navigate("/signup")
    })

  };

  return (
    <div className={classes.login}>
      <h1 className={classes.loginheading}>Log In </h1>
      <InputControl
        label="Email"
        type="email"
        placeholder="Enter the email"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <InputControl
        label="Password"
        type="password"
        placeholder="Enter the password"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, pass: e.target.value }))
        }
      />

      <div className={classes.footer}>
        <span className={classes.error}>{error}</span>
        <button
          disabled={btnDisable}
          onClick={logInHandler}
          className={classes.loginbtn}
        >
          {!btnDisable ? "Log In" : "Logging in"}
        </button>
        <p>
          Not registered yet? &nbsp;
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login