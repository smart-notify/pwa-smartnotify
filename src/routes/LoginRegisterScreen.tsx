import classes from "../css-modules/LoginRegister.module.css";
import { Link } from "react-router-dom";

function LoginRegisterScreen() {
  return (
    <div className={classes.loginBackground}>
      <div className={classes.login}>
        <h1 className={classes.title}>SmartNotify</h1>
        <span className={classes.text}>
          Revolucione o gerenciamento de sua encomenda
        </span>
        <Link to="/" className={classes.loginButton}> Login </Link>
        <Link to="/" className={classes.registerButton}> Cadastro </Link>
      </div>
    </div>
  );
}

export default LoginRegisterScreen;
