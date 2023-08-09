import { useState } from "react";
import { apiUrls } from "../apis/apiUrls";
import { bodyArgs } from "../types/bodyArgs";
import utilFunctions from "../utils/utilFunctions";

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

interface RemoveResidentFormProps {
  funcSetIsSucess: (data: boolean) => void;
  funcSetShowAlert: (data: boolean) => void;
}

function AddVerticalResidentForm({
  funcSetIsSucess,
  funcSetShowAlert,
} : RemoveResidentFormProps
) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const token = utilFunctions.extractToken();
  console.log(token);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const bodyArgs: bodyArgs = {
        email: email,
      };

      const response = await fetch(apiUrls.deleteResident, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyArgs),
      });

      if (response.status === 200) {
        funcSetIsSucess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      funcSetShowAlert(true);
    }

    // Limpar os campos do formulário
    setEmail("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className={classes.addResidentForm}
      >
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="Email do morador"
          required
        />

        <input type="submit" value="Remover" className={global.button} />
      </form>
    </div>
  );
}

export default AddVerticalResidentForm;
