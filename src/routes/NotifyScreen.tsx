import React, { useState } from "react";
import Webcam from "react-webcam";

import classes from "../css-modules/Notify.module.css";

import tirarFoto from "../assets/icones/icone-foto.svg";

const FACING_MODE_ENVIRONMENT = "environment";

function NotifyScreen() {
  const webcamRef = React.useRef<Webcam>(null);
  const [image, setImage] = useState("");

  const [facingMode] = React.useState(FACING_MODE_ENVIRONMENT);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);
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
        </button>
      </div>
    </>
  );
}

export default NotifyScreen;
