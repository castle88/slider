import MultiRangeSlider from "./components/MultiRangeSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}\nmax = ${max}`)}
        />
      </header>
    </div>
  );
}

export default App;
