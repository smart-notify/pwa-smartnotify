import classes from "../css-modules/LoginRegister.module.css";

function LoginRegisterScreen() {
  return (
    <div className={classes.loginBackground}>
      <div className={classes.login}>
        <h1 className={classes.title}>SmartNotify</h1>
        <span className={classes.text}>
          Revolucione o gerenciamento de sua encomenda
        </span>
        <button className={classes.loginButton}>Login</button>
        <button className={classes.registerButton}>Cadastro</button>
      </div>
    </div>
  );
}

export default LoginRegisterScreen;
