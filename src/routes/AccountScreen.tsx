import { Link } from "react-router-dom";

import BackButton from "../components/BackButton";
import classes from "../css-modules/Account.module.css";
import addResident from "../assets/icones/icone-adcResidente.svg";
import rmvResident from "../assets/icones/icone-rmvResidente.svg";

function AccountScreen() {
  return (
    <div>
      <div className={classes.accountContainer}>
        <BackButton to="/main" />
        <div className={classes.accountAddResidentContainer}>
          <Link to="/add-resident"
          className={classes.addResident}>
            <img
              className={classes.accountAddResidentIcon}
              src={addResident}
              alt="Adicionar residente"
            />
            <span>Adicionar morador</span>
          </Link>
        </div>

        <div className={classes.accountRmvResidentContainer}>
          <Link to="/rmv-resident"
          className={classes.rmvResident}>
            <img
              className={classes.accountRmvResidentIcon}
              src={rmvResident}
              alt="Remover residente"
            />
            <span>Remover morador</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountScreen;
