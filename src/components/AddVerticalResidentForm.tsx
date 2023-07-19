import { useState } from "react";
import { apiUrls } from "../apis/apiUrls";
import { bodyArgs } from "../types/bodyArgs";
import utilFunctions from "../utils/utilFunctions";

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

function AddVerticalResidentForm() {
  const [residentName, setResidentName] = useState("");
  const [email, setEmail] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [block, setBlock] = useState("");

  const token = utilFunctions.extractToken();

  console.log(token);

  const handleResidentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResidentName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApartmentNumber(event.target.value);
  };

  const handleBlockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlock(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const bodyArgs: bodyArgs = {
        name: residentName,
        email: email,
        apartmentNumber: apartmentNumber,
        block: block,
      };

      const response = await fetch(apiUrls.createApartmentResident, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyArgs),
      });

      if (response.status === 200) {
        // Redirecionar para tela de login
        window.location.href = "/account";
      }
    } catch (error) {
      console.error(error);
    }

    // Limpar os campos do formulário
    setEmail("");
    setResidentName("");
    setApartmentNumber("");
    setBlock("");
  };

  return (
    <div>
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
          value={apartmentNumber}
          type="text"
          placeholder="Ex: Apto 101"
          required
        />

        <input
          onChange={handleBlockChange}
          value={block}
          type="text"
          placeholder="Ex: Bloco 1"
        />

        <input type="submit" value="Cadastrar" className={global.button} />
      </form>
    </div>
  );
}

export default AddVerticalResidentForm;
