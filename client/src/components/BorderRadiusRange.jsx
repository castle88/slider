import React from "react";

export default function BorderRadiusRange({ borderRadius, handleChange }) {
  return (
    <div>
      <h2>Border Radius</h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="borderRadius">Border Radius</label>
        <input
          style={{ margin: "10px 0" }}
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
