import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../../../ui/Avatar/Avatar";
import "./ProfileMenu.css";

export default function ProfileMenu({ name, role, avatarSrc }) {
  return (
    <div className="profile-menu">
      {/* User Info */}
      <div className="profile-menu-user">
        <Avatar name={name} src={avatarSrc} size={50} />

        <div className="profile-menu-info">
          <p className="profile-menu-name">{name}</p>
          <p className="profile-menu-role">{role}</p>
        </div>
      </div>

      <hr />

      {/* Menu Actions */}
      <button className="profile-menu-item">My Profile</button>
      <button className="profile-menu-item">Settings</button>
      <button className="profile-menu-item logout">Logout</button>
    </div>
  );
}

ProfileMenu.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  avatarSrc: PropTypes.string,
};

ProfileMenu.defaultProps = {
  role: "User",
  avatarSrc: "",
};
