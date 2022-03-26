import Control from "./components/Control";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [hsl, setHsl] = useState({
    borderWidth: 0,
    first: 0,
    second: 0,
    third: 0,
    alpha: 0,
  });
  const [shadowColor, setShadowColor] = useState({
    sHue: 0,
    sSat: 0,
    sLight: 0,
    sAlpha: 0,
  });

  const [background, setBackground] = useState({
    hue: 0,
    saturation: 0,
    lightness: 0,
    bgAlpha: 0,
  });

  const [boxShadow, setBoxShadow] = useState({
    hOffset: 0,
    vOffset: 0,
    blur: 0,
    spread: 0,
  });

  const [dimensions, setDimensions] = useState({
    height: 1,
    width: 1,
  });

  const [borderRadius, setBorderRadius] = useState(0);

  const handleBorderColorChange = (e) => {
    setHsl((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleDimensionChange = (e) => {
    setDimensions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleBorderRadiusChange = (e) => {
    setBorderRadius(e.target.value);
  };
  const handleBoxShadowChange = (e) => {
    setBoxShadow((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleBackgroundChange = (e) => {
    setBackground((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleShadowColorChange = (e) => {
    setShadowColor((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="App">
      <div className="form-container">
        <Control
          hsl={hsl}
          dimensions={dimensions}
          borderRadius={borderRadius}
          boxShadow={boxShadow}
          background={background}
          shadowColor={shadowColor}
          handleShadowColorChange={handleShadowColorChange}
          handleBackgroundChange={handleBackgroundChange}
          handleBorderColorChange={handleBorderColorChange}
          handleDimensionChange={handleDimensionChange}
          handleBorderRadiusChange={handleBorderRadiusChange}
          handleBoxShadowChange={handleBoxShadowChange}
        />
      </div>
      <div className="display-container">
        <Display
          hsl={hsl}
          dimensions={dimensions}
          borderRadius={borderRadius}
          boxShadow={boxShadow}
          background={background}
          shadowColor={shadowColor}
        />
      </div>
    </div>
  );
}

export default App;

{
  /* <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}\nmax = ${max}`)}
/> */
}
