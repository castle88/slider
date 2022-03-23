import { useState } from "react";

export default function ColorRange({ hsl, handleChange }) {
  const { first, second, third, borderWidth, alpha } = hsl;

  return (
    <div className="border-color-range">
      <h2>Border Color</h2>
      <form>
        <label htmlFor="borderWidth">Width: {borderWidth}px</label>
        <input
          type="range"
          min={0}
          max={350}
          step={1}
          name="borderWidth"
          value={borderWidth}
          onChange={handleChange}
        />
        <label htmlFor="first">Hue: {first}</label>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          name="first"
          value={first}
          onChange={handleChange}
        />
        <label htmlFor="second">Saturation: {second}%</label>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="second"
          value={second}
          onChange={handleChange}
        />
        <label htmlFor="third">Lightness: {third}%</label>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="third"
          value={third}
          onChange={handleChange}
        />
        <label htmlFor="alpha">Alpha: {alpha}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="alpha"
          value={alpha}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
