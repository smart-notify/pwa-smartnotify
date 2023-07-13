import { useState } from "react"
import { useParams } from "react-router-dom"

import BackButton from "../components/BackButton"
import classes from "../css-modules/Validate.module.css"
import validacao from "../assets/icones/icone-validacao.svg"
import global from "../css-modules/Global.module.css"

function ValidateScreen() {
  const { id, name } = useParams<{ id: string, name: string}>();
  const [code , setCode] = useState("");

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`id: ${id}, \ncode: ${code}, \nname: ${name}`);
  };

  return (
    <div>
      <div className={classes.validateContainer}>
        <BackButton to="/main"/>
        <div className={classes.validateContent}>
          <img 
          src={validacao} 
          alt="Validação" 
          className={classes.validateIcon}/>
          <p>Insira o código de validação do(a) {name}:</p>
          <form 
          action="" 
          autoComplete="off" 
          className={classes.validateForm}
          onSubmit={handleSubmit}
          >
            <input 
            type="text" 
            placeholder="Código" 
            maxLength={4}
            value={code}
            onChange={handleCodeChange}
            required />
            <input 
            type="submit" 
            value="Validar" 
            className={global.button} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ValidateScreen