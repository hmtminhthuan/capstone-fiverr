import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderHome from "../components/HeaderHome/HeaderHome";

export const HomeTemplate = () => {
  return (
    <>
    <HeaderHome/>
      <div style={{  }}>
        <Outlet />
      </div>
    <FooterHome/>
    </>
  );
};
