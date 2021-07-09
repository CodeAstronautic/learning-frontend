import React from "react";
import "../../App.css";
import { ReactComponent as ReactLogo } from "./resources/study.svg";
function svgImageComponent() {
  return (
    <div className="container">
      <ReactLogo className="image" />
    </div>
  );
}

export default svgImageComponent;
