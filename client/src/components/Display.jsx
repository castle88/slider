import React from "react";

export default function Display({ hsl, dimensions, borderRadius }) {
  const { first, second, third, borderWidth, alpha } = hsl;
  const { height, width } = dimensions;

  return (
    <div
      style={{
        border: `${borderWidth}px solid hsla(${first}, ${second}%, ${third}%, ${alpha}%)`,
        height: `${height}%`,
        width: `${width}%`,
        borderRadius: `${borderRadius}%`,
      }}
    ></div>
  );
}
