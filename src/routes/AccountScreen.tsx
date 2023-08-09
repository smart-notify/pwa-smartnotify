import { Link } from "react-router-dom";

import BackButton from "../components/BackButton";
import classes from "../css-modules/Account.module.css";
import addResident from "../assets/icones/icone-adcResidente.svg";
import rmvResident from "../assets/icones/icone-rmvResidente.svg";

import typography from "../css-modules/Typography.module.css";

function AccountScreen() {
  return (
    <div>
      <div className={classes.accountContainer}>
        <BackButton to="/main" />
        <div className={classes.accountAddResidentContainer}>
          <Link to="/add-resident" className={classes.addResident}>
            <img
              className={classes.accountAddResidentIcon}
              src={addResident}
              alt="Adicionar residente"
            />
            <span className={typography.roboto_2_m}>Adicionar morador</span>
          </Link>
        </div>

        <div className={classes.accountRmvResidentContainer}>
          <Link to="/rmv-resident" className={classes.rmvResident}>
            <img
              className={classes.accountRmvResidentIcon}
              src={rmvResident}
              alt="Remover residente"
            />
            <span className={typography.roboto_2_m}>Remover morador</span>
          </Link>
        </div>

        <div className={classes.accountLogoutContainer}>
          <Link to="/access" className={classes.rmvResident}>
            <img
              className={classes.accountRmvResidentIcon}
              src={rmvResident}
              alt="Sair da conta"
            />
            <span className={typography.roboto_2_m}>Sair da conta</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountScreen;
