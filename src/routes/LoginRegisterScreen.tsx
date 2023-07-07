import classes from "../css-modules/LoginRegister.module.css";
import global from "../css-modules/global.module.css";
import { Link } from "react-router-dom";

function LoginRegisterScreen() {
  return (
    <div className={classes.loginRegisterBackground}>
      <div className={classes.loginRegister}>
        <h1 className={classes.title}>SmartNotify</h1>
        <span className={classes.text}>
          Revolucione o gerenciamento de sua encomenda
        </span>
        <Link to="/login" className={global.loginButton}> Login </Link>
        <Link to="/" className={global.registerButton}> Cadastro </Link>
      </div>
    </div>
  );
}

export default LoginRegisterScreen;
