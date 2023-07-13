import {useState} from 'react'

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

function AddVerticalResidentForm() {
  const [residentName, setResidentName] = useState("");
  const [email, setEmail] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [block, setBlock] = useState("");

  const handleResidentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResidentName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApartmentNumber(event.target.value);
  };

  const handleBlockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlock(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(residentName, email, apartmentNumber, block);
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
              value={apartmentNumber}
              type="number"
              placeholder="Número do apartamento"
              required
            />

            <input
              onChange={handleBlockChange}
              value={block}
              type="number"
              placeholder="Bloco do apartamento"
            />

            <input type="submit" value="Cadastrar" className={global.button} />
          </form>
    </div>
  )
}

export default AddVerticalResidentForm