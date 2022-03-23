import { useState, useRef, useCallback, useEffect } from "react";
import "./MultiRangeSlider.css";

export default function MultiRangeSlider({ min, max, onChange }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const handleMinChange = (e) => {
    const value = Math.min(+e.target.value, maxVal - 1);
    setMinVal(value);
    e.target.value = value.toString;
  };

  const handleMaxChange = (e) => {
    const value = Math.max(+e.target.value, minVal + 1);
    setMaxVal(value);
    e.target.value = value.toString();
  };

  const getPercent = useCallback(
    (value) => {
      Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={handleMinChange}
        className={`thumb ${
          minVal > max - 100 ? "thumb--zindex-5" : "thumb--zindex-3"
        }`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={handleMaxChange}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </>
  );
}
