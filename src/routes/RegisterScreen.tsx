import React, { useEffect, useState, ChangeEvent } from "react";

import global from "../css-modules/global.module.css";
import classes from "../css-modules/Register.module.css";
import { Link } from "react-router-dom";
import voltar from "../assets/icones/icone-voltar.svg";
import logo from "../assets/icones/logo.svg";

interface InputState {
  condominium: string;
  password: string;
  confirmPassword: string;
}

interface ErrorState {
  condominium: string;
  password: string;
  confirmPassword: string;
}

function RegisterScreen() {

  const [input, setInput] = useState<InputState>({
    condominium: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<ErrorState>({
    condominium: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setError((prevError) => {
      const stateObj = { ...prevError, [name]: "" };

      switch (name) {
        case "condominium":
          if (!value) {
            stateObj[name] = "Insira o nome do condomínio.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Insira a senha.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Senhas não coincidem.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : prevError.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Insira a confirmação da senha.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Senhas não coincidem.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div className={global.background}>
      <Link to="/access" className={global.backButton}>
        <img src={voltar} width={40} height={40} alt="Logo" />
      </Link>
      <div className={classes.registerContent}>
        <img src={logo} width={140} height={100} alt="Logo" />
        <form 
        className={classes.registerForm}
        onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="condominium"
            placeholder="Condomínio"
            value={input.condominium}
            onChange={onInputChange}
            onBlur={validateInput}
          />
          {error.condominium && <span className={classes.redInput}>{error.condominium}</span>}

          <input
            type="password"
            name="password"
            placeholder="Insira a senha"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
          />
          {error.password && <span className={classes.redInput}>{error.password}</span>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Insira a confirmação da senha"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
          />
          {error.confirmPassword && (
            <span className={classes.redInput}>{error.confirmPassword}</span>
          )}

          <input type="submit" value="Cadastrar" className={global.registerButton} />
        </form>
      </div>
    </div>
  );

}

export default RegisterScreen;
