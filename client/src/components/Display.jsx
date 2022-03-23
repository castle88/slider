import React from "react";

export default function Display({ hsl }) {
  const { first, second, third } = hsl;

  return (
    <div>
      <div style={{ border: `10px solid hsl(${first} ${second}% ${third}%)` }}>
        <h2>h {first}</h2>
        <h2>s {second}</h2>
        <h2>l {third}</h2>
      </div>
    </div>
  );
}
