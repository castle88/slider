export default function SlideRange({ details }) {
  const { name, value, min, max, unit, onChange } = details;

  return (
    <>
      <label htmlFor="">{`${name}: ${value}${unit}`}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
