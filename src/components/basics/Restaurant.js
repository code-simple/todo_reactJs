import React, { useState } from "react";
import MenuCard from "./MenuCard";
import "./styles.css";
import Menu from "./menuApi";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((e) => {
      return e.category;
    })
  ),
  "All"
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((e) => {
      return e.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
