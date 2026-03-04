import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/components/forms.css";

const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  required,
  type,
  pattern,
  errorMessage,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;

    // Regex validation if pattern exists
    if (pattern) {
      const regex = new RegExp(pattern);
      if (!regex.test(val) && val !== "") {
        setError(errorMessage || "Invalid format");
      } else {
        setError("");
      }
    } else {
      setError("");
    }

    onChange(e);
  };

  const handleBlur = () => {
    if (required && value === "") {
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
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        pattern={pattern}
        className={error ? "input-error" : ""}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
};

TextInput.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  required: false,
  type: "text",
  pattern: "",
  errorMessage: "",
};

export default TextInput;
