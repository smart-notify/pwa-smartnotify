import { useState } from "react";
import { useParams } from "react-router-dom";
import utilFunctions from "../utils/utilFunctions";

import BackButton from "../components/BackButton";
import Alert from "../components/NoParcelMessage";

import classes from "../css-modules/Validate.module.css";
import validacao from "../assets/icones/icone-validacao.svg";
import global from "../css-modules/Global.module.css";
import typography from "../css-modules/Typography.module.css";

function ValidateScreen() {
  const { id, residenceDetailsPattern, registrationCode } = useParams<{
    id: string;
    residenceDetailsPattern: string;
    registrationCode: string;
  }>();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const token = utilFunctions.extractToken();

  console.log(`VALIDATE: id: ${id}, ${residenceDetailsPattern}`);

  const url = `http://localhost:8080/api/parcel/${id}/validation-code`;

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryCode: code,
        }),
      });

      if (response.status === 200) {
        // Redirecionar para tela de login
        window.location.href = "/main";
      } else if (response.status != 200) {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div>
      <div className={classes.validateContainer}>
        <BackButton to="/main" />
        {error == false ? (
          <div className={classes.validateContent}>
            <img
              src={validacao}
              alt="Validação"
              className={classes.validateIcon}
            />
            <p className={typography.roboto_2_xs}>
              Insira o código de validação da encomenda <br></br> Nº{" "}
              {registrationCode}, {residenceDetailsPattern}:
            </p>
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
                required
              />
              <input type="submit" value="Validar" className={global.button} />
            </form>
          </div>
        ) : (
          <Alert message="Código inválido" />
        )}
      </div>
    </div>
  );
}

export default ValidateScreen;
