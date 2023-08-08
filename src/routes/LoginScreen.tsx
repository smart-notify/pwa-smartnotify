import React, { useState } from "react";
import { apiUrls } from "../apis/apiUrls";
import { bodyArgs } from "../types/bodyArgs";

import classes from "../css-modules/Login.module.css";
import global from "../css-modules/Global.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/icones/logo.svg";

import BackButton from "../components/BackButton";
import Alert from "../components/ApiResponseAlert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlecondominiumChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlepasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const bodyArgs: bodyArgs = {
        email: email,
        password: password,
      };

      const response = await fetch(apiUrls.loginCondominium, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyArgs),
      });

      if (response.status === 200) {
        // Redirecionar para tela de login
        window.location.href = "/main";
        setIsSuccess(true);
      }
      response.json().then((data) => {
        for (let key in data) {
          // Salvando cada atributo do objeto de resposta no cookie
          document.cookie = `${key}=${data[key]}`;
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setShowAlert(true);
    }

    // Limpar os campos do formulário
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.loginBackground}>
      <BackButton to="/access" />
      {showAlert == false && (
        <div className={classes.loginContent}>
          <img src={logo} width={140} height={100} alt="Logo" />
          <form
            onSubmit={handleSubmit}
            action=""
            autoComplete="off"
            className={classes.loginForm}
          >
            <input
              onChange={handlecondominiumChange}
              value={email}
              type="text"
              placeholder="Email do condomínio"
              required
            />

            <input
              onChange={handlepasswordChange}
              value={password}
              type="password"
              placeholder="password"
              required
            />

            <input type="submit" value="Entrar" className={global.button} />
          </form>
        </div>
      )}
      {showAlert &&
        (isSuccess ? null : (
          <Alert
            isSuccess={false}
            message="Email ou senha incorretos!"
            to="access"
          />
        ))}
    </div>
  );
}

export default Login;
