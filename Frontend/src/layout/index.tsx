import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function Layout() {
  return (
    <>
      <Container maxWidth='xl' disableGutters sx={{p: 0.5,  opacity: 1, backgroundImage: "inherit"}}>
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
