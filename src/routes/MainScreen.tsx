import { useEffect, useState } from "react";
import { apiUrls } from "../apis/apiUrls";
import { ParcelProps } from "../types/parcel";
import utilFunctions from "../utils/utilFunctions";

import typography from "../css-modules/Typography.module.css";

import classes from "../css-modules/Main.module.css";
import MainMenu from "../components/MainMenu";
import OptionsIcon from "../components/OptionsIcon";

import horizontalIcon from "../assets/icones/icone-casa.svg";
import verticalIcon from "../assets/icones/icone-apartamento.svg";


function MainScreen() {
  // Definindo estado de usuário
  const [resident, setResident] = useState<ParcelProps[]>([]);

  const condominiumType = utilFunctions.extractCondominiumType();

  const token = utilFunctions.extractToken();
  console.log(token);

  // O useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais, ou seja, ele dispara uma função toda vez que uma ou mais variáveis mudam de valor. Assim, é possível executar uma ação sempre que algo acontecer no componente.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // debugger;
        const response = await fetch(apiUrls.parcelGetAll, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setResident(data);
          console.log(data);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [token, apiUrls.parcelGetAll]);

  return (
    <div className={classes.mainBackground}>
      <div className={classes.mainHeader}>
        <h1 className={typography.poppins_1_xl}>Encomendas</h1>
      </div>
      <ul className={classes.parcelList}>
        {resident.map((resident) => {
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
      <MainMenu />
    </div>
  );
}

export default MainScreen;
