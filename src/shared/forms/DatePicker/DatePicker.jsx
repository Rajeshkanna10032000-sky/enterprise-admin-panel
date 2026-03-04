import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/components/forms.css";

const formatDate = (dateStr, format) => {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  switch (format) {
    case "DD-MM-YYYY":
      return `${day}-${month}-${year}`;
    case "DD-MMM-YYYY":
      return `${day}-${monthNames[date.getMonth()]}-${year}`;
    case "MM-DD-YYYY":
      return `${month}-${day}-${year}`;
    default:
      return dateStr;
  }
};

const getToday = () => {
  return new Date().toISOString().split("T")[0];
};

const DatePicker = ({
  label,
  value,
  onChange,
  disabled,
  required,
  minDate,
  maxDate,
  disablePast,
  disableFuture,
  displayFormat,
}) => {
  const [error, setError] = useState("");

  const today = getToday();

  const computedMin = disablePast ? today : minDate;
  const computedMax = disableFuture ? today : maxDate;

  const handleChange = (e) => {
    const val = e.target.value;

    if (required && !val) {
      setError("This field is required");
    } else {
      setError("");
    }

    onChange(val);
  };

  const handleBlur = () => {
    if (required && !value) {
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
        type="date"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        min={computedMin}
        max={computedMax}
        className={error ? "input-error" : ""}
      />

      {value && (
        <small className="date-format-preview">
          Selected: {formatDate(value, displayFormat)}
        </small>
      )}

      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  displayFormat: PropTypes.oneOf(["DD-MM-YYYY", "DD-MMM-YYYY", "MM-DD-YYYY"]),
};

DatePicker.defaultProps = {
  label: "",
  disabled: false,
  required: false,
  minDate: "",
  maxDate: "",
  disablePast: false,
  disableFuture: false,
  displayFormat: "DD-MM-YYYY",
};

export default DatePicker;
