import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/components/forms.css";

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled,
  required,
  options, // for multi checkbox
  value, // selected values for multi
}) => {
  const [error, setError] = useState("");

  const handleSingleChange = (e) => {
    const isChecked = e.target.checked;

    if (required && !isChecked) {
      setError("This field is required");
    } else {
      setError("");
    }

    onChange(isChecked);
  };

  const handleMultiChange = (optionValue) => {
    let updatedValues = [...value];

    if (updatedValues.includes(optionValue)) {
      updatedValues = updatedValues.filter((v) => v !== optionValue);
    } else {
      updatedValues.push(optionValue);
    }

    if (required && updatedValues.length === 0) {
      setError("Please select at least one option");
    } else {
      setError("");
    }

    onChange(updatedValues);
  };

  return (
    <div className="form-control">
      {label && (
        <label>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      {/* Multi Checkbox */}
      {options && options.length > 0 ? (
        <div className="checkbox-group">
          {options.map((opt) => (
            <label key={opt.value} className="checkbox-item">
              <input
                type="checkbox"
                checked={value.includes(opt.value)}
                onChange={() => handleMultiChange(opt.value)}
                disabled={disabled}
              />
              {opt.label}
            </label>
          ))}
        </div>
      ) : (
        /* Single Checkbox */
        <div className="checkbox-control">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleSingleChange}
            disabled={disabled}
          />
          {label && <span>{label}</span>}
        </div>
      )}

      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,

  // Multi checkbox props
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    }),
  ),
  value: PropTypes.array,
};

Checkbox.defaultProps = {
  label: "",
  checked: false,
  disabled: false,
  required: false,
  options: null,
  value: [],
};

export default Checkbox;
