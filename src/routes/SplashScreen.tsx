import React from 'react';
import Logo from '../assets/icones/logo.svg'

function SplashScreen() {
  return (
    <>
      <picture>
        <source media="(max-width: 800px)" srcSet={Logo} />

        <img src={Logo} width={1280} height={1600} alt="Logo" />
      </picture>
    </>
  );
}

export default SplashScreen;
