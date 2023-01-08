import React from "react";

import { NavMenu } from "./components/NavMenu";
import { Footer } from "./components/Footer";
import  { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <>
    <NavMenu />
    <AppRoutes />
    <Footer />
    </>
  );
}

export  { App };
