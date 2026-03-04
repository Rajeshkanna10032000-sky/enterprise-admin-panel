import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

export default function Avatar({
  name = "",
  src,
  size = 40,
  onClick,
  className = "",
}) {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <button
      type="button"
      className={`ui-avatar ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      {src ? (
        <img src={src} alt={name} className="ui-avatar-img" />
      ) : (
        <span className="ui-avatar-letter">{firstLetter}</span>
      )}
    </button>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
