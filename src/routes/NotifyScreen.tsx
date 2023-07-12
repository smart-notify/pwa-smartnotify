import React, { useState } from "react";
import { createWorker } from "tesseract.js";
import Tesseract from 'tesseract.js';
import Webcam from "react-webcam";

import classes from "../css-modules/Notify.module.css";

import tirarFoto from "../assets/icones/icone-foto.svg";

const FACING_MODE_ENVIRONMENT = "environment";

function NotifyScreen() {
  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const webcamRef = React.useRef<Webcam>(null);
  const [image, setImage] = useState("");
  const [result, setResult] = useState("");

  const [facingMode] = React.useState(FACING_MODE_ENVIRONMENT);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    const img = new Image();
    
    if (imageSrc) {
      setImage(imageSrc);
      img.src = imageSrc;

      const result = await Tesseract.recognize(imageSrc);
      console.log(result.data.text);

      // guardar resultado em uma variável
      const resultado = result.data.text;
      setResult(resultado);
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
        <div className={classes.webcamImg}>
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
          <span className={classes.result}>{result}</span>
        </button>

      </div>
    </>
  );
}

export default NotifyScreen;
