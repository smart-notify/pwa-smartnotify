import React from 'react';
import Logo from '../assets/icones/logo.svg'

import classes from '../css-modules/Splash.module.css';

function SplashScreen() {
  return (
    <div className={classes.splash}>
        <img src={Logo} width={140} height={100} alt="Logo" />
    </div>
  );
}

export default SplashScreen;
