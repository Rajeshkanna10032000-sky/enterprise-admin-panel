import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/components/forms.css";

const FileUploader = ({
  label,
  onChange,
  multiple,
  disabled,
  required,
  accept,
  maxSizeMB,
}) => {
  const [error, setError] = useState("");
  const [preview, setPreview] = useState([]);

  const validateFiles = (files) => {
    if (!files || files.length === 0) {
      if (required) setError("This field is required");
      return false;
    }

    for (let file of files) {
      // File type validation
      if (accept) {
        const allowedTypes = accept.split(",");
        const isValidType = allowedTypes.some((type) =>
          file.type.includes(type.replace(".", "")),
        );
        if (!isValidType) {
          setError("Invalid file type");
          return false;
        }
      }

      // File size validation
      if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
        setError(`File must be smaller than ${maxSizeMB}MB`);
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    if (!validateFiles(files)) return;

    onChange(multiple ? files : files[0]);

    // Preview for images
    const previews = files.map((file) => {
      if (file.type.startsWith("image/")) {
        return URL.createObjectURL(file);
      }
      return file.name;
    });

    setPreview(previews);
  };

  return (
    <div className="form-control">
      {label && (
        <label>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <input
        type="file"
        onChange={handleChange}
        multiple={multiple}
        disabled={disabled}
        accept={accept}
      />

      {error && <span className="error-text">{error}</span>}

      {/* Preview */}
      {preview.length > 0 && (
        <div className="file-preview">
          {preview.map((item, index) =>
            item.startsWith("blob:") ? (
              <img
                key={index}
                src={item}
                alt="preview"
                className="preview-img"
              />
            ) : (
              <p key={index}>{item}</p>
            ),
          )}
        </div>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  accept: PropTypes.string, // ".pdf,image/*"
  maxSizeMB: PropTypes.number,
};

FileUploader.defaultProps = {
  label: "",
  multiple: false,
  disabled: false,
  required: false,
  accept: "",
  maxSizeMB: 5,
};

export default FileUploader;
