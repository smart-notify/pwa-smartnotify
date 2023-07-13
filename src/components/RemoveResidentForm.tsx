import {useState} from 'react'

import global from "../css-modules/Global.module.css";
import classes from "../css-modules/AddResident.module.css";

function AddVerticalResidentForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
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
              onChange={handleEmailChange}
              value={email}
              type="email"
              placeholder="Email do morador"
              required
            />

            <input type="submit" value="Remover" className={global.button} />
          </form>
    </div>
  )
}

export default AddVerticalResidentForm