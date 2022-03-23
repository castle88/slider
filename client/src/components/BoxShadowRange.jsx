import React from "react";

export default function BoxShadowRange({ boxShadow, handleChange }) {
  const { hOffset, vOffset, blur, spread } = boxShadow;
  return (
    <div className="box-shadow-range">
      <h2>Box Shadow</h2>
      <form>
        <label htmlFor="hOffset">Horizontal-Offset: {hOffset}px</label>
        <input
          type="range"
          min={-30}
          max={30}
          step={1}
          name="hOffset"
          value={hOffset}
          onChange={handleChange}
        />
        <label htmlFor="vOffset">Vertical-Offset: {vOffset}px</label>
        <input
          type="range"
          min={-30}
          max={30}
          step={1}
          name="vOffset"
          value={vOffset}
          onChange={handleChange}
        />
        <label htmlFor="blur">blur: {blur}px</label>
        <input
          type="range"
          min={0}
          max={30}
          step={1}
          name="blur"
          value={blur}
          onChange={handleChange}
        />
        <label htmlFor="spread">Spread: {spread}px</label>
        <input
          type="range"
          min={0}
          max={30}
          step={1}
          name="spread"
          value={spread}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
