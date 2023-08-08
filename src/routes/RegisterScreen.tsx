import React, { useEffect, useState, ChangeEvent } from "react";
import { apiUrls } from "../apis/apiUrls";
import { bodyArgs } from "../types/bodyArgs";

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/Register.module.css";
import { Link } from "react-router-dom";
import voltar from "../assets/icones/icone-voltar.svg";
import logo from "../assets/icones/logo.svg";

import Alert from "../components/ApiResponseAlert";

interface passwordsInput {
  password: string;
  confirmPassword: string;
}

interface ErrorState {
  password: string;
  confirmPassword: string;
}

function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [passwords, setPasswords] = useState<passwordsInput>({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<ErrorState>({
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prevInput) => ({
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
        case "password":
          if (!value) {
            stateObj[name] = "Insira a senha.";
          } else if (passwords.confirmPassword && value !== passwords.confirmPassword) {
            stateObj["confirmPassword"] = "Senhas não coincidem.";
          } else {
            stateObj["confirmPassword"] = passwords.confirmPassword
              ? ""
              : prevError.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Insira a confirmação da senha.";
          } else if (passwords.password && value !== passwords.password) {
            stateObj[name] = "Senhas não coincidem.";
          } else if (passwords.password && value === passwords.password) {
            setPassword(passwords.password);
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  }
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const bodyArgs: bodyArgs = {
        email: email,
        password: password,
        name: name,
        type: type.toUpperCase(),
      };

      const response = await fetch(apiUrls.registerCondominium, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyArgs),
      });
      
      if (response.status === 200) {
        setIsSuccess(true);
      } 
    } catch (error) {
      console.error(error);
    } finally {
      setShowAlert(true);
    }
  };


  return (
    <div className={classes.registerContainer}>
      <Link to="/access" className={global.backButton}>
        <img src={voltar} width={40} height={40} alt="Logo" />
      </Link>
      {showAlert == false && (
        <div className={classes.registerContent}>
          <img src={logo} width={140} height={100} alt="Logo" />
          <form className={classes.registerForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email do condomínio"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Insira a senha"
              value={passwords.password}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.password && (
              <span className={classes.redInput}>{error.password}</span>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Insira a confirmação da senha"
              value={passwords.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.confirmPassword && (
              <span className={classes.redInput}>{error.confirmPassword}</span>
            )}

            <input
              type="text"
              name="name"
              placeholder="Insira o nome do condomínio"
              value={name}
              onChange={handleNameChange}
              required
            />

            <input
              type="text"
              name="type"
              placeholder="Tipo vertical ou horizontal"
              value={type}
              onChange={handleTypeChange}
              required
            />

            <input type="submit" value="Cadastrar" className={global.button} />
          </form>
        </div>
      )}
      {showAlert &&
        (isSuccess ? (
          <Alert
            isSuccess={true}
            message="Condomínio cadastrado com sucesso!"
            to="access"
          />
        ) : (
          <Alert
            isSuccess={false}
            message="Email já cadastrado! Tente novamente."
            to="register"
          />
        ))}
    </div>
  );
}

export default RegisterScreen;
