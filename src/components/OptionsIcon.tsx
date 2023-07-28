import { Link } from "react-router-dom";

import global from "../css-modules/Global.module.css";

import seta from "../assets/icones/icone-seta.svg";

interface OptionsIconProps {
  id: string;
  residenceDetails: string;
  registrationCode: string;
}

function OptionsIcon({ id, residenceDetails, registrationCode }: OptionsIconProps) {

  const residenceDetailsPattern = residenceDetails.replace(/\s/g, ' ');

  console.log(`OPTIONSICONS: id: ${id}, ${residenceDetailsPattern}`);

  return (
    <>
      <Link to={`/validate/${id}/${residenceDetailsPattern}/${registrationCode}`}>
        <div className={global.options}>
          <img id={global.optionsImage} src={seta} alt="Opções" width={30} height={30} />
        </div>
      </Link>
    </>
  );
}

export default OptionsIcon;
