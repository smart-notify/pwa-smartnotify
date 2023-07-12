import React, { useState } from "react";

import classes from "../css-modules/Login.module.css";
import global from "../css-modules/Global.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/icones/logo.svg";

import BackButton from "../components/BackButton";

function Login() {
  const [condominium, setCondominium] = useState("");
  const [password, setPassword] = useState("");

  const handlecondominiumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondominium(event.target.value);
  };

  const handlepasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(condominium, password);
  };

  return (
    <div className={classes.loginBackground}>
      <BackButton />
      <div className={classes.loginContent}>
        <img src={logo} width={140} height={100} alt="Logo" />
        <form 
        onSubmit={handleSubmit}
        action="" 
        autoComplete="off" 
        className={classes.loginForm}>
          <input
          onChange={handlecondominiumChange}
          value={condominium}
          type="text" 
          placeholder="Condomínio" 
          required/>

          <input 
          onChange={handlepasswordChange}
          value={password}
          type="password" 
          placeholder="password" 
          required/>

          <input 
          type="submit" 
          value="Entrar" 
          className={global.loginButton} />
        </form>
      </div>
    </div>
  )
}

export default Login