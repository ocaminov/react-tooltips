import { useEffect, useRef, useState } from "react";

function Tooltip({ text, domRect }) {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let tooltipElement = useRef();

  useEffect(() => {
    let { width, height } = tooltipElement.current.getBoundingClientRect();
    let coords = {};

    if (domRect.y < height) {
      coords.y = domRect.y + height;//para mostrar abajo
    } else {
      coords.y = domRect.y - height;//para mostrar arriba
    }

    coords.x = domRect.x + domRect.width / 2 - width / 2;

    setPosition(coords);
  }, [domRect]);

  return (
    <span
      className="tooltip"
      style={{ left: position.x, top: position.y }}
      ref={tooltipElement}
    >
      {text}
    </span>
  );
}

export default Tooltip;
