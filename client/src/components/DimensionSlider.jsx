import { useState } from "react";

export default function DimensionSlider({ dimensions, handleChange }) {
  const { height, width } = dimensions;

  return (
    <div className="dimension-slider">
      <h2>Dimensions</h2>
      <form>
        <label htmlFor="height">Height: {height}%</label>
        <input
          type="range"
          min={1}
          max={100}
          step={1}
          name="height"
          value={height}
          onChange={handleChange}
        />
        <label htmlFor="width">Width: {width}%</label>
        <input
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
