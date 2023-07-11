import React, { useState } from "react";
import Webcam from "react-webcam";


const FACING_MODE_ENVIRONMENT = "environment";

function NotifyScreen() {
  const webcamRef = React.useRef<Webcam>(null);
  const [image, setImage] = useState("");

  const [facingMode, setFacingMode] = React.useState(FACING_MODE_ENVIRONMENT);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc){setImage(imageSrc);}
  }, [webcamRef]);

  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: 470,
    height: 320
  };

  console.log(facingMode + videoConstraints);

  return (
    <>
      <div className="webcam-container">
        <div className="webcam-img">
          {image === "" ? (
            <Webcam
              className="webcam"
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
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </div>
        <button >Tirar foto</button>
      </div>
    </>
  );
}

export default NotifyScreen;