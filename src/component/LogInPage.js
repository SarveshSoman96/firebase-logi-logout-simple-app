import classes from "./LogInPage.module.css";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LogInPage = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged(user => {
          
          user ? setIsLogged(user.displayName) : setIsLogged("")
    
        })
      });

    const signOutHandler = (e) => {
        signOut(auth).then(() => {
            navigate("/")
            console.log("Sign out successfully")
        }).catch(err => {
            console.log(err.message)
        })       
    };

  return (
    <div className={classes.greeet}>
        Welcome {isLogged}
        <br />
        <button  onClick={signOutHandler}>Sign Out</button>
    </div>
  )
}

export default LogInPage;