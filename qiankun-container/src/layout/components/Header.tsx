import React, { useEffect, useState } from "react";
import { removeStorage } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import { MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import "./header.scss";
import { useSelector } from "react-redux";
import { BradeItem } from "../../types";
export default function Header(props: any) {
  const { show } = props;
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const state = useSelector((state: any) => state.menu);
  const [bradeList, setBradeList] = useState(Array<BradeItem>);
  useEffect(() => {
    setBradeList(state.bradeList);
  }, [state]);
  const handleLogout = () => {
    removeStorage();
    navigate("/login");
  };
  const handleClose = () => {
    show(false);
    setShowLogout(false);
  };

  const handleMenuChange = (index: number) => {
    if (!index) return;
    let baseUrl = bradeList[0].path;
    let actUrl = bradeList[index].path;
    setBradeList(bradeList.slice(index, bradeList.length));
    navigate(`${baseUrl}${actUrl}`);
  };

  //popover
  return (
    <div id="header" className="flex row-between col-center">
      <div className="header-left flex col-center">
        <div className="header-left-menu" onClick={() => show(true)}>
          <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="header-left-search" onClick={() => show(true)}>
          <SearchOutlined style={{ fontSize: "20px" }} />
        </div>
        {bradeList.map((item: BradeItem, index) => {
          return (
            <div
              className="header-left-brade"
              onClick={() => handleMenuChange(index)}
              key={item.name}
            >
              <div>{item.name || ""}</div>
            </div>
          );
        })}
      </div>
      <div className="header-right flex col-center" onClick={handleClose}>
        <div className="header-right-info"></div>
        <div
          className="header-right-actions"
          onMouseEnter={() => setShowLogout(true)}
        >
          fly(8009656)
        </div>
        <div
          className="popover flex-col col-end radius4"
          style={{ display: showLogout ? "" : "none" }}
        >
          <p className="warmTips ft12">小牛牛希望哥哥永远开心快乐～</p>
          <button className="logoutBtn radius4 ft12" onClick={handleLogout}>
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
}
