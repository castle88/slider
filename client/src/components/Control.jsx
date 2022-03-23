import ColorRange from "./ColorRange";
import DimensionSlider from "./DimensionSlider";
import BorderRadiusRange from "./BorderRadiusRange";
import BoxShadowRange from "./BoxShadowRange";

export default function Control({
  hsl,
  dimensions,
  borderRadius,
  boxShadow,
  handleBoxShadowChange,
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
      <BoxShadowRange
        boxShadow={boxShadow}
        handleChange={handleBoxShadowChange}
      />
    </div>
  );
}
