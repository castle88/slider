import React from "react";

export default function BorderRadiusRange({ borderRadius, handleChange }) {
  return (
    <div>
      <h2>Border Radius</h2>
      <form>
        <label htmlFor="borderRadius">Border Radius: {borderRadius}%</label>
        <input
          type="range"
          min={0}
          max={50}
          step={1}
          name="borderRadius"
          value={borderRadius}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
