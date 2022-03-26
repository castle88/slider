import ColorRange from "./ColorRange";
import DimensionSlider from "./DimensionSlider";
import BorderRadiusRange from "./BorderRadiusRange";
import BoxShadowRange from "./BoxShadowRange";
import BackgroundRange from "./BackgroundRange";
import ShadowColorRange from "./shadowColorRange";

export default function Control({
  hsl,
  dimensions,
  borderRadius,
  boxShadow,
  background,
  shadowColor,
  handleBoxShadowChange,
  handleBorderColorChange,
  handleDimensionChange,
  handleBorderRadiusChange,
  handleBackgroundChange,
  handleShadowColorChange,
}) {
  return (
    <div className="control">
      <ColorRange hsl={hsl} handleChange={handleBorderColorChange} />
      <BackgroundRange
        background={background}
        handleChange={handleBackgroundChange}
      />
      <div>
        <DimensionSlider
          dimensions={dimensions}
          handleChange={handleDimensionChange}
        />
        <br />
        <br />
        <BorderRadiusRange
          borderRadius={borderRadius}
          handleChange={handleBorderRadiusChange}
        />
      </div>
      <BoxShadowRange
        boxShadow={boxShadow}
        handleChange={handleBoxShadowChange}
      />
      <ShadowColorRange
        shadowColor={shadowColor}
        handleChange={handleShadowColorChange}
      />
    </div>
  );
}
