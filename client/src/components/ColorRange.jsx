import { useState } from "react";

export default function ColorRange({ hsl, handleChange }) {
  const { first, second, third } = hsl;

  return (
    <div className="border-color-range">
      <h2>Border Color</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="first">Hue:</label>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          name="first"
          value={first}
          onChange={handleChange}
        />
        <label htmlFor="second">Saturation:</label>

        <input
          style={{ margin: "10px 0" }}
          type="range"
          min={0}
          max={100}
          step={1}
          name="second"
          value={second}
          onChange={handleChange}
        />
        <label htmlFor="third">Lightness:</label>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="third"
          value={third}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
