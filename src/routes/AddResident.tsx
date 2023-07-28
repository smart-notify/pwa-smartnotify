import React, { useState } from "react";

import classes from "../css-modules/AddResident.module.css";

import BackButton from "../components/BackButton";
import addResidentWhite from "../assets/icones/icone-adcResidente-white.svg";

import AddVerticalResidentForm from "../components/AddVerticalResidentForm";
import AddHorizontalResidentForm from "../components/AddHorizontalResidentForm";

import utilFunctions from "../utils/utilFunctions";

function AddResident() {

  const condominiumType = utilFunctions.extractCondominiumType();
  const condominiumName = utilFunctions.extractCondominiumName();

  return (
    <div>
      <BackButton to="/account" />
      <div className={classes.addResidentContainer}>
        <div className={classes.addResidentContent}>
          <img src={addResidentWhite} alt="Adicionar morador" />
          <div className={classes.choiceOfCondominium}>
            {/* Verificar tipo de condomínio é igual a vertical */}
            {condominiumType === "VERTICAL" && (
            <div className={classes.verticalChoice}>
              <label className={classes.verticalLabel}>
                <span>Condomínio Vertical</span>
                <span>{condominiumName}</span>
              </label>
            </div>
            )}
            { /* Verificar tipo de condomínio é igual a horizontal */ }
            {condominiumType === "HORIZONTAL" && (
              <div className={classes.horizontalChoice}>
                <label className={classes.horizontalLabel}>
                  <span>Condomínio Horizontal</span>
                  <span>{condominiumName}</span>
                </label>
              </div>
            )}
          </div>
          {condominiumType === 'VERTICAL' && (
        // Renderize o formulário para condomínio vertical
        <AddVerticalResidentForm />
      )}
      {condominiumType === 'HORIZONTAL' && (
        // Renderize o formulário para condomínio horizontal
        <AddHorizontalResidentForm />
      )}
        </div>
      </div>
    </div>
  );
}

export default AddResident;
