import React from "react";
import PropTypes from "prop-types";
import "../../../styles/components/forms.css";

const ToggleSwitch = ({ label, checked, onChange, disabled }) => {
  return (
    <div className="form-control toggle-switch">
      {label && <label>{label}</label>}
      <input
        type="checkbox"
        className="toggle-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="slider" />
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  label: "",
  disabled: false,
};

export default ToggleSwitch;
