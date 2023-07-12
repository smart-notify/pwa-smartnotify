import React, { useEffect, useState } from "react";

import classes from "../css-modules/Main.module.css";
import { Link } from "react-router-dom";
import adcEncomenda from "../assets/icones/icone-adcEncomenda.svg";
import opcoes from "../assets/icones/icone-opcoes.svg";
import MainMenu from "../components/MainMenu";

// Consumindo api do git hub apenas para popular o front
export interface Member {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

function MainScreen() {
  const [parcel, setParcel] = useState([]);

  // Definindo estado de usuário
  const [user, setUser] = useState<Member[]>([]);

  // Consumindo api do git hub apenas para popular o front
  // O useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais, ou seja, ele dispara uma função toda vez que uma ou mais variáveis mudam de valor. Assim, é possível executar uma ação sempre que algo acontecer no componente.
  useEffect(() => {
    const response = fetch(`https://api.github.com/orgs/rocketseat/members`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className={classes.mainBackground}>
      <div className={classes.mainHeader}>
        <h1>Encomendas</h1>
      </div>
      <ul className={classes.parcelList}>
        {user.map((user) => {
          return (
            <li key={user.id} className={classes.itemList}>
              <div className={classes.parcelContent}>
                <div className={classes.parcelCard}>
                  <img src={user.avatar_url} alt={user.login} />
                  <div className={classes.parcelInfo}>
                    <h2>{user.login}</h2>
                    <span>{user.html_url}</span>
                  </div>
                </div>
                <Link to="" className={classes.options}>
                  <img src={opcoes} alt="Opções" width={50} height={50} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={classes.adcEncomenda}>
        <Link to="/">
          <img
            src={adcEncomenda}
            alt="Adicionar Encomenda"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <MainMenu />
    </div>
  );
}

export default MainScreen;
