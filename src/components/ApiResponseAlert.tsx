import classes from "../css-modules/ApiResponseAlert.module.css";
import global from "../css-modules/Global.module.css";

import RedirectButton from "./RedirectButton";

import success from "../assets/icones/icone-sucesso.svg";
import failure from "../assets/icones/icone-falha.svg";

interface ApiResponseAlertProps {
  isSuccess: boolean;
  message: string;
  to: string;
}

function ApiResponseAlert( { message, isSuccess, to }: ApiResponseAlertProps) {

  return (
    <div className={classes.AlertContent}>
      {
        isSuccess 
        ?
        <img src={success} alt="Validação" className={classes.validateIcon} />
        :
        <img src={failure} alt="Validação" className={classes.validateIcon} /> 
      }
      <p>
        {message}
      </p>

      <RedirectButton to={to} />
    </div>
  )
}

export default ApiResponseAlert