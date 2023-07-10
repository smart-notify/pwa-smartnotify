import classes from "../css-modules/Main.module.css";
import { Link } from "react-router-dom";
import encomenda from "../assets/icones/icone-encomendas.svg";
import notificacao from "../assets/icones/icone-notificacoes.svg";
import sindico from "../assets/icones/icone-sindico.svg";

function MainScreen() {
  return (
    <div className={classes.loginRegisterBackground}>
      <div className={classes.loginRegister}>
        <h1 className={classes.title}>SmartNotify</h1>
        <span className={classes.text}>
          Revolucione o gerenciamento de sua encomenda
        </span>
        <Link to="/">
          <img src="" alt="" />
        </Link>
        <Link to="/">
          <img src="" alt="" />
        </Link>
        <Link to="/">
          <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default MainScreen;
