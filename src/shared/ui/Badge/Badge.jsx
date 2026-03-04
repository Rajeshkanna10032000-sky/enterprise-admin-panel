import React from "react";
import PropTypes from "prop-types";
import "./Badge.css";

export default function Badge({
  value,
  variant = "danger",
  dot = false,
  className = "",
}) {
  if (value === undefined || value === null || value === "") return null;

  const displayValue = typeof value === "number" && value > 99 ? "99+" : value;

  return (
    <span
      className={`ui-badge ui-badge-${variant} ${dot ? "ui-badge-dot" : ""} ${className}`}
    >
      {!dot && displayValue}
    </span>
  );
}

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(["danger", "success", "warning", "info", "neutral"]),
  dot: PropTypes.bool,
  className: PropTypes.string,
};
