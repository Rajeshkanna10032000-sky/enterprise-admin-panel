import React from "react";
import PropTypes from "prop-types";
import Badge from "../Badge/Badge";
import "./IconButton.css";

export default function IconButton({
  icon: Icon,
  onClick,
  badge,
  className = "",
}) {
  return (
    <button
      className={`header-icon-btn ${className}`}
      onClick={onClick}
      type="button"
    >
      {Icon && <Icon />}
      <Badge value={badge} />
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  badge: PropTypes.number,
  className: PropTypes.string,
};
