import { ParcelProps } from "../types/parcel";
import classes from "../css-modules/Main.module.css";
import utilFunctions from "../utils/utilFunctions";

import typography from "../css-modules/Typography.module.css";

import horizontalIcon from "../assets/icones/icone-casa.svg";
import verticalIcon from "../assets/icones/icone-apartamento.svg";

import OptionsIcon from "../components/OptionsIcon";

interface ParcelListProps {
  residentList: ParcelProps[];
}

function ParcelList({residentList} : ParcelListProps) {

  const condominiumType = utilFunctions.extractCondominiumType();

  return (
    <ul className={classes.parcelList}>
        {residentList.map((resident) => {
          return (
            <li key={resident.id} className={classes.itemList}>
              <div className={classes.parcelContent}>
                <div className={classes.parcelCard}>
                  <div className={classes.parcelIcon}>
                    {condominiumType === "VERTICAL" && (
                      <img src={verticalIcon} alt="Apartamento" />
                    )}
                    {condominiumType === "HORIZONTAL" && (
                      <img src={horizontalIcon} alt="Casa" />
                    )}
                  </div>
                  <div className={classes.parcelInfo}>
                    <h2 
                    className={typography.poppins_2_m}>
                      {resident.residenceDetails}
                    </h2>
                    <span 
                    className={typography.roboto_1_s}>
                      {resident.registrationCode}
                    </span>
                  </div>
                </div>
                <OptionsIcon id={resident.id} residenceDetails={resident.residenceDetails} registrationCode={resident.registrationCode}/>
              </div>
            </li>
          );
        })}
      </ul>
  )
}

export default ParcelList;