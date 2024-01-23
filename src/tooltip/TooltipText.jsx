//props.children nos da un arreglo con todos los elementos q esten dentro del componente

import { useState } from "react";
import { useRef } from "react";
import Tooltip from "./Tooltip";

function TooltipText(props) {
  const [tooltipDomRect, setTooltipDomRect] = useState();
  const [showTooltip, setShowTooltip] = useState(false);

  let spanElement = useRef(); //Permite obtener elementos del DOM usando la propiedad ref del elemento

  function handleMouseOver() {
    let domData = spanElement.current.getBoundingClientRect();
    setTooltipDomRect(domData);
    setShowTooltip(true);
  }

  return (
    <>
      <span
        className="tooltip-text"
        ref={spanElement}
        onMouseOver={(ev) => handleMouseOver(ev)}
        onMouseLeave={ev => setShowTooltip(false)}
      >
        {props.children}
      </span>
      {showTooltip && <Tooltip domRect={tooltipDomRect} text={props.tooltip} />}
    </>
  );
}

export default TooltipText;
