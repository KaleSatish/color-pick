import { SketchPicker } from 'react-color';
import { useState, useEffect } from 'react';

function PickColor() {
  const bodyElm = document.querySelector("body");
  const initialColor = {r: 255,g: 255,b: 255,a: 0.3};
  const [backGroundColor, setBackGroundColor] = useState(initialColor);
  useEffect(()=>{
    // Setting background color of body (page) on pick color
    bodyElm.style.backgroundColor = `rgba(${backGroundColor.r},${backGroundColor.g},${backGroundColor.b}, ${backGroundColor.a})`;
  },[backGroundColor])
  const onColorChange = ({rgb}) =>{
    setBackGroundColor(rgb);
  }
  return (
    <>
        <h3 style={{textAlign: "center" }}>Pick the color</h3>
        <SketchPicker 
          color={ backGroundColor }
          onChangeComplete={ onColorChange }
        />
    </>
  );
}

export default PickColor;
