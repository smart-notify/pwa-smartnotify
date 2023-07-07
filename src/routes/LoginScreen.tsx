import React, { useState } from "react";

import classes from "../css-modules/Login.module.css";
import global from "../css-modules/global.module.css";
import { Link } from "react-router-dom";
import voltar from "../assets/icones/icone-voltar.svg";
import logo from "../assets/icones/logo.svg";

function Login() {
  const [condominio, setCondominio] = useState("");
  const [senha, setSenha] = useState("");

  const handleCondominioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondominio(event.target.value);
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(condominio, senha);
  };

  return (
    <div className={classes.loginBackground}>
      <Link to="/acesso" className={classes.backButton}>
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
          onChange={handleCondominioChange}
          value={condominio}
          type="text" 
          placeholder="Condomínio" 
          required/>

          <input 
          onChange={handleSenhaChange}
          value={senha}
          type="password" 
          placeholder="Senha" 
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