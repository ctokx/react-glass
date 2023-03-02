import { useState, useEffect } from "react";
import "./Blur.css";
import signature from "./signature.jpg";
function BlurEffect() {
  const [blurLevel, setBlurLevel] = useState(8);
  const [cssCode, setCssCode] = useState("");
  const [componentcolor, setcomponentcolor] = useState("#c8c8c8");
  const [componentradius, setcomponentradius] = useState(0);
  const [componentOpacity, setcomponentOpacity] = useState(0.3);
  useEffect(() => {
    const newCssCode = `.my-component {
      filter: blur(${blurLevel}px);
      opacity: ${componentOpacity};
      background: ${componentcolor};
      border-radius:${componentradius}

    }`;

    setCssCode(newCssCode);
  }, [blurLevel, componentOpacity, componentcolor, componentradius]);

  const handleBlurChange = (event) => {
    setBlurLevel(parseFloat(event.target.value));
  };
  const handleBackground = (event) => {
    setcomponentcolor(event.target.value);
  };
  const handleRadius = (event) => {
    setcomponentradius(event.target.value);
  };
  const handleOpacity = (event) => {
    setcomponentOpacity(event.target.value);
  };
  const handleCopyCode = () => {
    navigator.clipboard.writeText(cssCode);
  };

  return (
    <div className="blur">
      
      <div className="to-show">
        <div className="text-container">This component will be blurred</div>
        <div
          className="my-component"
          style={{
            height: "300px",
            background: `${componentcolor}`,
            filter: `blur(${blurLevel}px)`,
            margin: "50px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            borderRadius: `${componentradius}px`,
            rotate: "5deg",
            opacity: `${componentOpacity}`,
          }}
        ></div>
      </div>
      <div className="controllers">
        <label>Blur Level </label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={blurLevel}
          onChange={handleBlurChange}
          style={{
            width: "300px",
          }}
        />
        <label>Color </label>
        <input
          type="color"
          style={{
            width: "300px",
            border: "none",
            borderRadius: "10px",
            WebkitAppearance: "none",
          }}
          value={componentcolor}
          onChange={handleBackground}
        />
        <label>Border Radius</label>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          style={{
            width: "300px",
          }}
          value={componentradius}
          onChange={handleRadius}
        ></input>
        <label>Opacity</label>
        <input
          type="range"
          min="0.1"
          max="0.9"
          step="0.1"
          style={{
            width: "300px",
          }}
          value={componentOpacity}
          onChange={handleOpacity}
        ></input>
      </div>
      <div className="css_component">
        <textarea value={cssCode} readOnly rows={10} className="css_field" />
        <button className="css_button" onClick={handleCopyCode}>
          Copy CSS Code
        </button>
      </div>
    </div>
  );
}
export default BlurEffect;
