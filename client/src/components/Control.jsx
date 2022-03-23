import ColorRange from "./ColorRange";
import DimensionSlider from "./DimensionSlider";
import BorderRadiusRange from "./BorderRadiusRange";

export default function Control({
  hsl,
  dimensions,
  borderRadius,
  handleBorderColorChange,
  handleDimensionChange,
  handleBorderRadiusChange,
}) {
  return (
    <div className="control">
      <ColorRange hsl={hsl} handleChange={handleBorderColorChange} />
      <BorderRadiusRange
        borderRadius={borderRadius}
        handleChange={handleBorderRadiusChange}
      />
      <DimensionSlider
        dimensions={dimensions}
        handleChange={handleDimensionChange}
      />
    </div>
  );
}
