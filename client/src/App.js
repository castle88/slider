import MultiRangeSlider from "./components/MultiRangeSlider";
import Range from "./components/Range";
import Control from "./components/Control";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [hsl, setHsl] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const handleChange = (e) => {
    setHsl((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="App">
      <div className="form-container">
        <Control hsl={hsl} handleChange={handleChange} />
      </div>
      <div className="display-container">
        <Display hsl={hsl} />
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
