import React from 'react';
import Logo from '../assets/icones/logo.svg'

import classes from '../css-modules/SplashScreen.module.css';

function SplashScreen() {
  return (
    <div className={classes.splash}>
        <img className={classes.splash} src={Logo} width={140} height={100} alt="Logo" />
    </div>
  );
}

export default SplashScreen;
