import logo from "./logo.svg";
import "./App.css";
import BlurEffect from "./BlurEffect";

import signature from "./signature.jpg";
function App() {
  return (
    <div className="App">
      <div className="signature">
        <img className="signature_img" src={signature} alt="signature" />
        <h3>
          Made by{" "}
          <a target="_blank" href="https://github.com/ctokx" rel="noreferrer">
            ctokx
          </a>{" "}
        </h3>
      </div>
      <BlurEffect />
    </div>
  );
}

export default App;
