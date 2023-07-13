import BackButton from "../components/BackButton";
import rmvResidentWhite from "../assets/icones/icone-rmvResidente-white.svg";

import RemoveResidentForm from "../components/RemoveResidentForm";

import classes from "../css-modules/RemoveResident.module.css";
function RmvResident() {
  return (
    <div>
      <BackButton to="/account" />
      <div className={classes.removeResidentContainer}>
        <div className={classes.removeResidentContent}>
          <img src={rmvResidentWhite} alt="Remover morador" />
          <RemoveResidentForm />
        </div>
      </div>
    </div>
  );
}

export default RmvResident