import { useParams } from "react-router-dom"

import BackButton from "../components/BackButton"
import classes from "../css-modules/Validate.module.css"
import validacao from "../assets/icones/icone-validacao.svg"
import global from "../css-modules/Global.module.css"

function ValidateScreen() {
  const { id } = useParams<{ id: string }>();

  console.log(`id: ${id}`);

  return (
    <div>
      <div className={classes.validateContainer}>
        <BackButton to="/main"/>
        <div className={classes.validateContent}>
          <img 
          src={validacao} 
          alt="Validação" 
          className={classes.validateIcon}/>
          <p>Insira o código de validação:</p>
          <form action="" autoComplete="off" className={classes.validateForm}>
            <input 
            type="text" 
            placeholder="Código" 
            maxLength={4}
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