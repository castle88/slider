import React from "react";

export default function Display({ hsl, dimensions, borderRadius, boxShadow }) {
  const { first, second, third, borderWidth, alpha } = hsl;
  const { height, width } = dimensions;
  const { hOffset, vOffset, blur, spread } = boxShadow;

  return (
    <div
      style={{
        border: `${borderWidth}px solid hsla(${first}, ${second}%, ${third}%, ${alpha}%)`,
        height: `${height}%`,
        width: `${width}%`,
        borderRadius: `${borderRadius}%`,
        boxShadow: `${hOffset}px ${vOffset}px ${blur}px ${spread}px #333`,
      }}
    ></div>
  );
}
