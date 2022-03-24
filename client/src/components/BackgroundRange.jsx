import React from "react";

export default function BackgroundRange({ background, handleChange }) {
  const { hue, saturation, lightness, bgAlpha } = background;
  return (
    <div className="background-slider">
      <h2>Background</h2>
      <form>
        <label htmlFor="Hue">Hue: {hue}</label>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          name="hue"
          value={hue}
          onChange={handleChange}
        />
        <label htmlFor="saturation">Saturation: {saturation}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="saturation"
          value={saturation}
          onChange={handleChange}
        />
        <label htmlFor="lightness">Lightness: {lightness}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="lightness"
          value={lightness}
          onChange={handleChange}
        />
        <label htmlFor="bgAlpha">Alpha: {bgAlpha}%</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          name="bgAlpha"
          value={bgAlpha}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
