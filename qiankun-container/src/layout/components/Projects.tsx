import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { Dispatch } from "redux";
import { storeBradeList } from "../../store/menu/actions";
import { getProjectList, getMenuList } from "../../api/project";
import { BradeItem } from "../../types";
// import Router from '../../router'
import "./projects.scss";
import { setStorage } from "../../utils/common";
import { ProjectItem, MenuItem } from "../../types";
export default function Project(props: any) {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [bradeList, setBradeList] = useState(Array<BradeItem>);
  //props
  const { show } = props || {};
  const [microList, setMicroList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  //init
  useEffect(() => {
    getProjectList().then((res = {}) => {
      const {
        result: { list = [] },
      } = res;
      setMicroList(list);
      setStorage("micro_List", list);
    });
    getMenu();
  }, []);

  const [menuList, setMenuList] = useState(Array<MenuItem>);
  const [activeMicroApp, setActiveMicroApp] = useState("/home");
  const getMicroAppMenu = (item: ProjectItem, index: number) => {
    const { id, activeRule = "/home", name = "" } = item;
    setCurrentIndex(index);
    setBradeList([{ name, path: activeRule }]);
    setActiveMicroApp(activeRule);
    if (!id) return;
    getMenu(id);
  };
  //获取菜单列表
  const getMenu = (projectId?: number) => {
    let searchParams = {};
    projectId && Object.assign(searchParams, { projectId });
    getMenuList(searchParams).then((res = {}) => {
      const {
        result: { list = [] },
      } = res;

      setMenuList(list);
    });
  };
  //路由跳转
  const goToMenuUrl = (menuItem: MenuItem) => {
    const { menuName, menuPath } = menuItem;
    navigate(activeMicroApp + menuPath);
    show(false);
    const alreadyExsit = bradeList.filter((item) => {
      return item.name === menuName;
    });

    if (alreadyExsit.length) return;
    const newBrade = [bradeList[0], { name: menuName, path: menuPath }];
    setBradeList(newBrade);
    dispatch(storeBradeList(newBrade));
  };

  return (
    <div id="micro" className="flex">
      <div className="micro-list flex-col">
        {microList.map((item: any, index) => (
          <p
            className="micro-item"
            style={currentIndex === index ? { background: "#6f9cf9" } : {}}
            onClick={() => getMicroAppMenu(item, index)}
            key={item.id}
          >
            {item.name || ""}
          </p>
        ))}
      </div>
      <div className="micro-submenu flex">
        {menuList.map((menuItem: MenuItem) => (
          <div key={menuItem.id} onClick={() => goToMenuUrl(menuItem)}>
            * {menuItem.menuName}
          </div>
        ))}
      </div>
    </div>
  );
}
