import MultiRangeSlider from "./components/MultiRangeSlider";
import ColorRange from "./components/ColorRange";
import Control from "./components/Control";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [hsl, setHsl] = useState({
    borderWidth: 0,
    first: 0,
    second: 0,
    third: 0,
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

  return (
    <div className="App">
      <div className="form-container">
        <Control
          hsl={hsl}
          dimensions={dimensions}
          borderRadius={borderRadius}
          handleBorderColorChange={handleBorderColorChange}
          handleDimensionChange={handleDimensionChange}
          handleBorderRadiusChange={handleBorderRadiusChange}
        />
      </div>
      <div className="display-container">
        <Display
          hsl={hsl}
          dimensions={dimensions}
          borderRadius={borderRadius}
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
