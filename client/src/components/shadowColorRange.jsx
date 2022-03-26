import React from "react";

export default function shadowColorRange({ shadowColor, handleChange }) {
  const { sHue, sSat, sLight, sAlpha } = shadowColor;
  return (
    <div>
      <h2>Shadow Color</h2>
      <form>
        <label htmlFor="sHue">Hue: {sHue}</label>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          name="sHue"
          value={sHue}
          onChange={handleChange}
        />
        <label htmlFor="sHue">Saturation: {sSat}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="sSat"
          value={sSat}
          onChange={handleChange}
        />
        <label htmlFor="sLight">Lightness: {sLight}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="sLight"
          value={sLight}
          onChange={handleChange}
        />
        <label htmlFor="sAlpha">Alpha: {sAlpha}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="sAlpha"
          value={sAlpha}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
