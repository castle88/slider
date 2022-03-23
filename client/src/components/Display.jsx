import React from "react";

export default function Display({ hsl, dimensions, borderRadius }) {
  const { first, second, third, borderWidth } = hsl;
  const { height, width } = dimensions;

  return (
    <div
      style={{
        border: `${borderWidth}px solid hsl(${first} ${second}% ${third}%)`,
        height: `${height}%`,
        width: `${width}%`,
        borderRadius: `${borderRadius}%`,
      }}
    ></div>
  );
}
