import classes from "../css-modules/Login.module.css";
import global from "../css-modules/global.module.css";
import { Link } from "react-router-dom";
import voltar from "../assets/icones/icone-voltar.svg";
import logo from "../assets/icones/logo.svg";

function Login() {
  return (
    <div className={classes.loginBackground}>
      <Link to="/acesso" className={classes.backButton}>
        <img src={voltar} width={40} height={40} alt="Logo" />
      </Link>
      <div className={classes.loginContent}>
        <img src={logo} width={140} height={100} alt="Logo" />
        <form action="" autoComplete="off" className={classes.loginForm}>
          <input type="text" placeholder="Condomínio" required/>
          <input type="text" placeholder="Senha" required/>
          <input type="submit" value="Entrar" className={global.loginButton} />
        </form>
      </div>
    </div>
  )
}

export default Login