import { Link } from 'react-router-dom'
import voltar from "../assets/icones/icone-voltar.svg";
import global from "../css-modules/Global.module.css";

function BackButton() {
  return (
    <>
      <Link to="/access" className={global.backButton}>
        <img src={voltar} width={40} height={40} alt="Logo" />
      </Link>
    </>
  )
}

export default BackButton