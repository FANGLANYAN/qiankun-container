import React from "react";
import { NavLink } from "react-router-dom";
// import Router from '../../router'
import "./menu.scss";

export default function Menu() {
  return (
    <div id="menu" className="flex">
      <div className="menu-list flex-col">
        <NavLink to="/home/micro-react-app1">应用一</NavLink>
        <NavLink to="/home/micro-react-app2">应用二</NavLink>
        <NavLink to="/home/micro-vue-app3">应用三</NavLink>
      </div>
      <div className="menu-submenu flex">
        <div>我是菜单 *</div>
        <div>我是菜单 *</div>
        <div>我是菜单 *</div>
        <div>我是菜单 *</div>
        <div>我是菜单 *</div>
        <div>我是菜单 *</div>
        <div>我是菜单 *</div>
      </div>
    </div>
  );
}
