import classes from "../css-modules/NoParcelMessage.module.css";

import utilFunctions from "../utils/utilFunctions";

import NoParcel from "../assets/icones/icone-semEncomendas.svg";

interface NoParcelMessageProps {
  message: string;
}

function NoParcelMessage({ message}: NoParcelMessageProps) {

  return (
    <div className={classes.NoParcelMessageContent}>
      <img src={NoParcel} alt="Validação" className={classes.validateIcon} />
      <p>
        {message}
      </p>
    </div>
  );
}

export default NoParcelMessage;
