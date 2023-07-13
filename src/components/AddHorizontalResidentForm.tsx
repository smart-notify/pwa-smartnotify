import {useState} from 'react'

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

function AddVerticalResidentForm() {
  const [residentName, setResidentName] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const handleResidentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResidentName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHouseNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(residentName, email, houseNumber);
  };

  return (
    <div>
      <form
            onSubmit={handleSubmit}
            action=""
            autoComplete="off"
            className={classes.addResidentForm}
          >
            <input
              onChange={handleResidentChange}
              value={residentName}
              type="text"
              placeholder="Nome do morador"
              required
            />

            <input
              onChange={handleEmailChange}
              value={email}
              type="email"
              placeholder="Email do morador"
              required
            />

            <input
              onChange={handleNumberChange}
              value={houseNumber}
              type="number"
              placeholder="Número da casa"
              required
            />

            <input type="submit" value="Cadastrar" className={global.button} />
          </form>
    </div>
  )
}

export default AddVerticalResidentForm