import { useState } from "react";
import { apiUrls } from "../apis/apiUrls";
import { bodyArgs } from "../types/bodyArgs";
import utilFunctions from "../utils/utilFunctions";

import Alert from "./ApiResponseAlert";

import addResidentWhite from "../assets/icones/icone-adcResidente-white.svg";

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

interface AddHorizontalResidentFormProps {
  funcSetIsSucess: (data: boolean) => void;
  funcSetShowAlert: (data: boolean) => void;
}


function AddHorizontalResidentForm(
  {
    funcSetIsSucess,
    funcSetShowAlert,
  } : AddHorizontalResidentFormProps
) {
  const [residentName, setResidentName] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const token = utilFunctions.extractToken();
  const condominiumName = utilFunctions.extractCondominiumName();

  const handleResidentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResidentName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHouseNumber(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const bodyArgs: bodyArgs = {
        name: residentName,
        email: email,
        houseNumber: houseNumber,
      };

      const response = await fetch(apiUrls.createHouseResident, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyArgs),
      });

      if (response.status === 200) {
        funcSetIsSucess(true);
      } 
    } catch (error) {
      console.error(error);
    } finally {
      funcSetShowAlert(true);
    }

    // Limpar os campos do formulário
    setEmail("");
    setResidentName("");
    setHouseNumber("");
  };

  return (
    <div className={classes.horizontalResidentContainer}>
        <div className={classes.horizontalResidentContent}>
          <div className={classes.horizontalChoice}>
            <img src={addResidentWhite} alt="Adicionar morador" />
            <label className={classes.horizontalLabel}>
              <span>Condomínio Horizontal</span>
              <span>{condominiumName}</span>
            </label>
          </div>
          <form
            onSubmit={handleSubmit}
            action=""
            autoComplete="off"
            className={classes.addResidentForm}
          >
            <input
              onChange={handleResidentChange}
              value={residentName}
              type="text"
              placeholder="Nome do morador"
              required
            />

            <input
              onChange={handleEmailChange}
              value={email}
              type="email"
              placeholder="Email do morador"
              required
            />

            <input
              onChange={handleNumberChange}
              value={houseNumber}
              type="text"
              placeholder="Ex. Casa 1"
              required
            />

            <input type="submit" value="Cadastrar" className={global.button} />
          </form>
        </div>
    </div>
  );
}

export default AddHorizontalResidentForm;
