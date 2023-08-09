import React, { useState } from "react";

import classes from "../css-modules/AddResident.module.css";

import BackButton from "../components/BackButton";
import addResidentWhite from "../assets/icones/icone-adcResidente-white.svg";

import AddVerticalResidentForm from "../components/AddVerticalResidentForm";
import AddHorizontalResidentForm from "../components/AddHorizontalResidentForm";
import Alert from "../components/ApiResponseAlert";

import utilFunctions from "../utils/utilFunctions";

function AddResident() {
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSucessDataFromChild = (data: boolean) => {
    setIsSucess(data);
  };

  const handleShowAlertDataFromChild = (data: boolean) => {
    setShowAlert(data);
  };

  const condominiumType = utilFunctions.extractCondominiumType();
  const condominiumName = utilFunctions.extractCondominiumName();

  return (
    <div>
      <BackButton to="/account" />
      <div className={classes.addResidentContainer}>
        {showAlert == false && (
          <div className={classes.addResidentContent}>
            <div className={classes.choiceOfCondominium}>
              {/* Verificar se tipo de condomínio é igual a vertical */}
              {condominiumType === "VERTICAL" && (
                <AddVerticalResidentForm
                  funcSetIsSucess={handleSucessDataFromChild}
                  funcSetShowAlert={handleShowAlertDataFromChild}
                />
              )}
              {/* Verificar se tipo de condomínio é igual a horizontal */}
              {condominiumType === "HORIZONTAL" && (
                <AddHorizontalResidentForm
                  funcSetIsSucess={handleSucessDataFromChild}
                  funcSetShowAlert={handleShowAlertDataFromChild}
                />
              )}
            </div>
          </div>
        )}
        {showAlert &&
          (isSuccess ? (
            <Alert
              isSuccess={true}
              message="Morador cadastrado com sucesso!"
              to="account"
            />
          ) : (
            <Alert
              isSuccess={false}
              message="Erro ao cadastrar morador! Tente novamente."
              to="add-resident"
            />
          ))}
      </div>
    </div>
  );
}

export default AddResident;
