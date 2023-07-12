import { Link } from "react-router-dom";

import classes from "../css-modules/Main.module.css";

import encomenda from "../assets/icones/icone-encomendas.svg";
import notificacao from "../assets/icones/icone-notificacoes.svg";
import sindico from "../assets/icones/icone-sindico.svg";

function MainMenu() {
  return (
    <div className={classes.mainMenu}>
        <div className={classes.mainMenuContent}>
          <div className={classes.menuOptions}>
            <Link to="/main" className={classes.encomenda}>
              <img src={encomenda} alt="Encomenda" />
              <span>Encomendas</span>
            </Link>
          </div>
          <div className={classes.menuOptions}>
            <Link to="/notify" className={classes.notificacao}>
              <img src={notificacao} alt="Notificação" />
              <span>Notificação</span>
            </Link>
          </div>
          <div className={classes.menuOptions}>
            <Link to="/" className={classes.conta}>
              <img src={sindico} alt="Síndico" />
              <span>Conta</span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default MainMenu