import { Link } from "react-router-dom";

import global from "../css-modules/Global.module.css";

import opcoes from "../assets/icones/icone-opcoes.svg";
import seta from "../assets/icones/icone-seta.svg";

interface OptionsIconProps {
  id: string;
  residenceDetails: string;
}

function OptionsIcon({ id, residenceDetails }: OptionsIconProps) {
  return (
    <>
      <Link to={`/validate/${id}/${residenceDetails}`}>
        <div className={global.options}>
          <img id={global.optionsImage} src={seta} alt="Opções" width={30} height={30} />
        </div>
      </Link>
    </>
  );
}

export default OptionsIcon;
