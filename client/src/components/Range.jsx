import { useState } from "react";

export default function Range({ hsl, handleChange }) {
  const { first, second, third } = hsl;

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          name="first"
          value={first}
          onChange={handleChange}
        />
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
