import Range from "./Range";

export default function Control({ hsl, handleChange }) {
  return (
    <div>
      <Range hsl={hsl} handleChange={handleChange} />
    </div>
  );
}
