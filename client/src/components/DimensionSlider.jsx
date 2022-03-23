import { useState } from "react";

export default function DimensionSlider({ dimensions, handleChange }) {
  const { height, width } = dimensions;

  return (
    <div className="dimension-slider">
      <h2>Dimensions</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="height">Height:</label>
        <input
          style={{ margin: "10px 0" }}
          type="range"
          min={1}
          max={100}
          step={1}
          name="height"
          value={height}
          onChange={handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input
          style={{ margin: "10px 0" }}
          type="range"
          min={1}
          max={100}
          step={1}
          name="width"
          value={width}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
