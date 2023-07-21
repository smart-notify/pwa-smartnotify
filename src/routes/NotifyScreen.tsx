import React, { useState } from "react";
import { apiUrls } from "../apis/apiUrls";

import utilFunctions from "../utils/utilFunctions";

import Tesseract from 'tesseract.js';
import Webcam from "react-webcam";

import classes from "../css-modules/Notify.module.css";

import tirarFoto from "../assets/icones/icone-foto.svg";

import BackButton from "../components/BackButton";

const FACING_MODE_ENVIRONMENT = "environment";

function NotifyScreen() {

  const webcamRef = React.useRef<Webcam>(null);
  const [image, setImage] = useState("");

  const token = utilFunctions.extractToken();

  const [facingMode] = React.useState(FACING_MODE_ENVIRONMENT);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    const img = new Image();
    
    if (imageSrc) {
      setImage(imageSrc);
      img.src = imageSrc;

      const tesseractResult = await Tesseract.recognize(imageSrc);
      console.log(tesseractResult.data.text);

      // guardar resultado em uma variável
      const labelContent = tesseractResult.data.text;

      try {
        const bodyArgs = {
          labelContent: labelContent
        }

        // Consumir API para validar o resultado
        const response = await fetch(apiUrls.parcelNotification, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bodyArgs),
        })

        if (response.status === 200) {
          // Redirecionar para tela de login
          window.location.href = "/main";
        }
        
        } catch (error) {
          
        }
    }
  }, [webcamRef]);

  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: 470,
    height: 320,
  };

  console.log(
    facingMode 
    + videoConstraints 
    + image);

  return (
    <>
      <div className={classes.webcamContainer}>
        <BackButton to="/main" />
        <div className={classes.webcamImg}>
          <div className={classes.imgInstructions}>
            <p>Com o celular na vertical, 
            fotografe o bloco, apartamento ou número da casa.  
            </p>
          </div>
          
          {image === "" ? (
            <Webcam
              className={classes.webcam}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              screenshotQuality={1}
            />
          ) : (
            <img
              src={image}
              alt="Scan"
              className={classes.webcam}
            />
          )}
        </div>
        <button className={classes.webcamButton}>
          <img src={tirarFoto} alt="Tirar foto" onClick={capture} />
        </button>

      </div>
    </>
  );
}

export default NotifyScreen;
