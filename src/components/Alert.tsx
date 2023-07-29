import classes from "../css-modules/Alert.module.css";

import utilFunctions from "../utils/utilFunctions";

import NoParcel from "../assets/icones/icone-semEncomendas.svg";

interface AlertProps {
  message: string;
}

function Alert({ message}: AlertProps) {

  return (
    <div className={classes.AlertContent}>
      <img src={NoParcel} alt="Validação" className={classes.validateIcon} />
      <p>
        Sem encomendas no condomínio 
      </p>
    </div>
  );
}

export default Alert;
