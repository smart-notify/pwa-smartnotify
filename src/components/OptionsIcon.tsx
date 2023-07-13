import { Link } from "react-router-dom";

import global from "../css-modules/Global.module.css";

import opcoes from "../assets/icones/icone-opcoes.svg";

interface OptionsIconProps {
  id: number;
  name: string;
}

function OptionsIcon({ id, name }: OptionsIconProps) {
  return (
    <>
      <Link to={`/validate/${id}/${name}`}>
        <div className={global.options}>
          <img id={global.optionsImage} src={opcoes} alt="Opções" width={30} height={30} />
        </div>
      </Link>
    </>
  );
}

export default OptionsIcon;
