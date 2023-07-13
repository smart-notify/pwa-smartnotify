import React, { useState } from "react";

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

import BackButton from "../components/BackButton";
import addResidentWhite from "../assets/icones/icone-adcResidente-white.svg";

import AddVerticalResidentForm from "../components/AddVerticalResidentForm";
import AddHorizontalResidentForm from "../components/AddHorizontalResidentForm";

interface FormState {
  type: "vertical" | "horizontal";
}

function AddResident() {
  const [formState, setForm] = useState<FormState>({ type: "vertical" });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = event.target.value as FormState["type"];
    setForm({ ...formState, type });
  };

  return (
    <div>
      <BackButton to="/account" />
      <div className={classes.addResidentContainer}>
        <div className={classes.addResidentContent}>
          <img src={addResidentWhite} alt="Adicionar morador" />
          <div className={classes.choiceOfCondominium}>
            <div className={classes.verticalChoice}>
              <label className={classes.verticalLabel}>
                <input
                  type="radio"
                  value="vertical"
                  checked={formState.type === "vertical"}
                  onChange={handleFormChange}
                />
                Vertical
              </label>
            </div>
            <div className={classes.horizontalChoice}>
              <label className={classes.horizontalLabel}>
                <input
                  type="radio"
                  value="horizontal"
                  checked={formState.type === "horizontal"}
                  onChange={handleFormChange}
                />
                Horizontal
              </label>
            </div>
          </div>
          {formState.type === 'vertical' && (
        // Renderize o formulário para condomínio vertical
        <AddVerticalResidentForm />
      )}
      {formState.type === 'horizontal' && (
        // Renderize o formulário para condomínio horizontal
        <AddHorizontalResidentForm />
      )}
        </div>
      </div>
    </div>
  );
}

export default AddResident;
