import React, { useState } from 'react';
import classes from "./SignUp.module.css";
import InputControl from "./InputControl";
import { Link , useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const [errorMsg , setErrorMsg] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const signUpHandler = () => {
    if(!fields.name || !fields.email || !fields.pass){
        setErrorMsg("Enter into fields");
        return;
    }
    if(!fields.email.includes("@")){
      setErrorMsg("Email should include @");
      return;
    }
    if(fields.pass.length < 5){
      setErrorMsg("Password length greate than 5");
      return;
    }
    setErrorMsg("")
    setSubmitDisabled(true)
    
    createUserWithEmailAndPassword(auth, fields.email, fields.pass)
    .then(async res => { 
      setSubmitDisabled(false)
      const user = res.user;
      await updateProfile(user, {
        displayName: fields.name
      })
      navigate("/")
    })
    .catch(err => {
      setSubmitDisabled(false)
      console.log(err.message)
    })

    setFields({name: "", email: "", pass: ""})
  };

  return (
    <div className={classes.signup}>
      <h1 className={classes.loginheading}>Sign Up </h1>
      <InputControl
        label="Name"
        type="text"
        placeholder="John Doe"
        onChange={(e) =>
          setFields((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <InputControl
        label="Email"
        type="email"
        placeholder="test@test.com"
        onChange={(e) =>
          setFields((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <InputControl
        label="Password"
        type="password"
        placeholder="akhavoahoahv"
        onChange={(e) =>
          setFields((prev) => ({ ...prev, pass: e.target.value }))
        }
      />

      <div className={classes.footer}>
        <span className={classes.error}>{errorMsg}</span>
        <button
          disabled={submitDisabled}
          onClick={signUpHandler}
          className={classes.signupbtn}
        >
          {!submitDisabled ? "Sign Up" : "Registering"}
        </button>
        <p>
          Alreay registered? &nbsp;
          <Link to="/logIn">log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp