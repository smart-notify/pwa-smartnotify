import React, { useState } from "react";

import classes from "../css-modules/Login.module.css";
import global from "../css-modules/global.module.css";
import { Link } from "react-router-dom";
import voltar from "../assets/icones/icone-voltar.svg";
import logo from "../assets/icones/logo.svg";

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
      <Link to="/acesso" className={global.backButton}>
        <img src={voltar} width={40} height={40} alt="Logo" />
      </Link>
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