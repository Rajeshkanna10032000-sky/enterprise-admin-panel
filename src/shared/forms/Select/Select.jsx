import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/components/forms.css";

const Select = ({
  label,
  options,
  value,
  onChange,
  disabled,
  required,
  multiple,
  placeholder,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let selectedValue;
    if (multiple) {
      selectedValue = Array.from(
        e.target.selectedOptions,
        (option) => option.value,
      );
    } else {
      selectedValue = e.target.value;
    }

    // Required validation
    if (required && (!selectedValue || selectedValue.length === 0)) {
      setError("This field is required");
    } else {
      setError("");
    }

    onChange(selectedValue);
  };

  const handleBlur = () => {
    if (required && (!value || (Array.isArray(value) && value.length === 0))) {
      setError("This field is required");
    }
  };

  return (
    <div className="form-control">
      {label && (
        <label>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        multiple={multiple}
      >
        {!multiple && placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.any, label: PropTypes.string }),
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  label: "",
  disabled: false,
  required: false,
  multiple: false,
  placeholder: "",
};

export default Select;
