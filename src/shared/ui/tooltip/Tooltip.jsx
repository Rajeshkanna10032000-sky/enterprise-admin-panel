import React from "react";
import PropTypes from "prop-types";
import "../tooltip/tooltip.css";

export default function Tooltip({ text, children, position = "bottom" }) {
  return (
    <div className={`tooltip-wrapper tooltip-${position}`}>
      {children}
      {text && <span className="tooltip-box">{text}</span>}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};
