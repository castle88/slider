import React from "react";

export default function Display({
  hsl,
  dimensions,
  borderRadius,
  background,
  boxShadow,
  shadowColor,
}) {
  const { first, second, third, borderWidth, alpha } = hsl;
  const { height, width } = dimensions;
  const { hOffset, vOffset, blur, spread } = boxShadow;
  const { hue, saturation, lightness, bgAlpha } = background;
  const { sHue, sSat, sLight, sAlpha } = shadowColor;

  return (
    <div
      style={{
        border: `${borderWidth}px solid hsla(${first}, ${second}%, ${third}%, ${alpha}%)`,
        height: `${height}%`,
        width: `${width}%`,
        borderRadius: `${borderRadius}%`,
        boxShadow: `${hOffset}px ${vOffset}px ${blur}px ${spread}px hsla(${sHue}, ${sSat}%, ${sLight}%, ${sAlpha}%)`,
        margin: "0 auto",
        backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${bgAlpha}%)`,
      }}
    ></div>
  );
}
