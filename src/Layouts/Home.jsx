import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
