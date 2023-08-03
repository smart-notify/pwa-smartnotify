import React, { useState } from "react";

import classes from "../css-modules/AddResident.module.css";

import BackButton from "../components/BackButton";
import addResidentWhite from "../assets/icones/icone-adcResidente-white.svg";

import AddVerticalResidentForm from "../components/AddVerticalResidentForm";
import AddHorizontalResidentForm from "../components/AddHorizontalResidentForm";
import Alert from "../components/ApiResponseAlert";

import utilFunctions from "../utils/utilFunctions";

function AddResident() {

  const [isChildSucceeded, setIsChildSucceeded] = useState<boolean>(false);

  const handleDataFromChild = (data: boolean) => {
    setIsChildSucceeded(data);
  }

  const condominiumType = utilFunctions.extractCondominiumType();
  const condominiumName = utilFunctions.extractCondominiumName();

  return (
    <div>
      <BackButton to="/account" />
      <div className={classes.addResidentContainer}>
        { isChildSucceeded == false ? (
          <div className={classes.addResidentContent}>
          <div className={classes.choiceOfCondominium}>
            {/* Verificar tipo de condomínio é igual a vertical */}
            {condominiumType === "VERTICAL" && (
              <AddVerticalResidentForm sendDataToParent={handleDataFromChild}/>
            )}
            { /* Verificar tipo de condomínio é igual a horizontal */ }
            {condominiumType === "HORIZONTAL" && (
              <AddHorizontalResidentForm />
            )}
          </div>
        </div>
        ) : (
          <Alert
            isSuccess={true}
            message="Morador adicionado com sucesso!"
            to="account"
          />
        )} 
      </div>
    </div>
  );
}

export default AddResident;
