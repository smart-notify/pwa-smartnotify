import { useEffect, useState } from "react";
import { apiUrls } from "../apis/apiUrls";
import { ParcelProps } from "../types/parcel";
import utilFunctions from "../utils/utilFunctions";

import classes from "../css-modules/Main.module.css";
import MainMenu from "../components/MainMenu";
import OptionsIcon from "../components/OptionsIcon";

function MainScreen() {
  // Definindo estado de usuário
  const [resident, setResident] = useState<ParcelProps[]>([]);

  const token = utilFunctions.extractToken();
  console.log(token);

  // O useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais, ou seja, ele dispara uma função toda vez que uma ou mais variáveis mudam de valor. Assim, é possível executar uma ação sempre que algo acontecer no componente.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // debugger;
        const response = await fetch(apiUrls.parcelGetAll, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setResident(data);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [token, apiUrls.parcelGetAll]);

  // const fetchDataExample = async () => {
  //   try {
  //     // debugger;
  //     var myHeaders = new Headers();
  //     myHeaders.append(
  //       "Authorization",
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWZhZWxAZ21haWwuY29tIiwiaWF0IjoxNjg5ODkzNTczLCJleHAiOjE2OTc2Njk1NzN9.p-mVg5-DKR95_mzUoadtf9aqJ4cE-g-1OlVTYPbMa4M"
  //     );

  //     await fetch(
  //       "https://d263-2804-431-cfc3-c650-eca7-bd34-60ab-590d.ngrok-free.app/api/parcel",
  //       {
  //         method: "GET",
  //         headers: myHeaders,
  //         redirect: "follow",
  //       }
  //     )
  //       .then((response) => response.text())
  //       .then((result) => console.log(`RESULTADO: ${result}`))
  //       .catch((error) => console.log("error", error));
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // fetchDataExample();

  // console.log(fetchDataExample);

  return (
    <div className={classes.mainBackground}>
      <div className={classes.mainHeader}>
        <h1>Encomendas</h1>
      </div>
      <ul className={classes.parcelList}>
        {resident.map((resident) => {
          return (
            <li key={resident.id} className={classes.itemList}>
              <div className={classes.parcelContent}>
                <div className={classes.parcelCard}>
                  <div className={classes.parcelInfo}>
                    <h2>{resident.residentName}</h2>
                    <span>{resident.residentEmail}</span>
                  </div>
                  <span>{resident.registrationCode}</span>
                </div>
                <OptionsIcon id={resident.id} name={resident.residentName} />
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
