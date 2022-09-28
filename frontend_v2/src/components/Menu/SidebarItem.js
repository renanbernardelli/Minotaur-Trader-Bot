import React from "react";
import {Link} from "react-router-dom";

/**
 * 
 * @param {to} props : link address;
 * @param {text} props : item text;
 * @param {children} props : SVG tag;
 * @param {onClick} props : callback (if needed);
 * 
 */
function SidebarItem(props) {

  function getClassName(itemPath) {

    return window.location.pathname === itemPath ? 'nav-item active' : 'nav-item'
  }

  return (
    <li className={getClassName(props.to)}>
      <Link to={props.to} className="nav-link" onClick={props.onClick}>
        <span className="sidebar-icon">
          {props.children}          
        </span> 
        <span className="sidebar-text">{props.text}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;