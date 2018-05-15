import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function Sidebar() {
  return (
    <div className="common-sidebar">
      <ul className="nav_menu">
        <li className="menu_item_wrap">
          <NavLink to="/scan" className="menu_item">
            <FontAwesomeIcon icon="camera-retro" />
          </NavLink>
        </li>
        <li className="menu_item_wrap">
          <NavLink to="/users" className="menu_item">
            <FontAwesomeIcon icon="users" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

