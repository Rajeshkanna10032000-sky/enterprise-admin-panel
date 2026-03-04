import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ProfileDropdown.css";

export default function ProfileDropdown({ open, onClose, children }) {
  const ref = useRef(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="profile-overlay">
      <div className="profile-dropdown" ref={ref}>
        {children}
      </div>
    </div>
  );
}

ProfileDropdown.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
