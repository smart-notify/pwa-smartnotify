import { useState } from "react";

import rmvResidentWhite from "../assets/icones/icone-rmvResidente-white.svg";

import BackButton from "../components/BackButton";
import RemoveResidentForm from "../components/RemoveResidentForm";
import Alert from "../components/ApiResponseAlert";

import classes from "../css-modules/RemoveResident.module.css";
function RmvResident() {
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSucessDataFromChild = (data: boolean) => {
    setIsSucess(data);
  };

  const handleShowAlertDataFromChild = (data: boolean) => {
    setShowAlert(data);
  };

  return (
    <div>
      <BackButton to="/account" />
      <div className={classes.removeResidentContainer}>
        {showAlert == false && (
          <div className={classes.removeResidentContent}>
            <img src={rmvResidentWhite} alt="Remover morador" />
            <RemoveResidentForm
              funcSetIsSucess={handleSucessDataFromChild}
              funcSetShowAlert={handleShowAlertDataFromChild}
            />
          </div>
        )}
        {showAlert &&
          (isSuccess ? (
            <Alert
              isSuccess={true}
              message="Morador removido com sucesso!"
              to="account"
            />
          ) : (
            <Alert
              isSuccess={false}
              message="Erro ao remover morador! Tente novamente."
              to="rmv-resident"
            />
          ))}
      </div>
    </div>
  );
}

export default RmvResident;
