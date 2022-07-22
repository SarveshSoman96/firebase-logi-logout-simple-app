import { Link } from "react-router-dom";
import classes from "./Home.module.css";

function Home(props) {
  return (
    <div className={classes.container}>
        <p className={classes.heading}>Welcome!</p>
        <div className={classes.loginlink}>
            Alreay have have account <Link to="/logIn" >Login</Link>
        </div>
        <div className={classes.signinlink}>
            Create account <Link to="/signup">Sign Up</Link>
        </div>
        <p>{props.name ? `Welcome ${props.name}` : "Log In Please"} <br /> Log in after registering</p>
    </div>
  )
}

export default Home;