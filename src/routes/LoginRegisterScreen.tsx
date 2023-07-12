import classes from "../css-modules/LoginRegister.module.css";
import global from "../css-modules/Global.module.css";
import { Link } from "react-router-dom";

function LoginRegisterScreen() {
  return (
    <div className={classes.loginRegisterBackground}>
      <div className={classes.loginRegister}>
        <h1 className={classes.title}>SmartNotify</h1>
        <span className={classes.text}>
          Revolucione o gerenciamento de sua encomenda
        </span>
        <Link to="/login" className={global.button}>
          {" "}
          Login{" "}
        </Link>
        <Link to="/register" className={global.button}>
          {" "}
          Cadastro{" "}
        </Link>
      </div>
    </div>
  );
}

export default LoginRegisterScreen;
